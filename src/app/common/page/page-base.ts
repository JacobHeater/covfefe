import { IPage } from "../../interfaces/page/ipage";
import { AppEventBus, EVENT_MENU_CLICKED } from "../events";

export abstract class PageBase implements IPage {
  get title(): string {
    if (!this.$title) {
      throw new Error('Page title must have a value.');
    }

    return this.$title;
  }

  protected abstract get $title(): string;

  handleMenuClick() {
    AppEventBus.raiseEvent(EVENT_MENU_CLICKED);
  }
}
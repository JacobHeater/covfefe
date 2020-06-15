import { IPage } from "../../interfaces/page/ipage";
import { AppEventBus, EVENT_MENU_TAPPED } from "../events";

export abstract class PageBase implements IPage {
  get title(): string {
    if (!this.$title) {
      throw new Error('Page title must have a value.');
    }

    return this.$title;
  }

  protected abstract get $title(): string;
}
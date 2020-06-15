import { Component, OnInit, Input } from "@angular/core";
import { AppEventBus, EVENT_MENU_TAPPED } from "../../common/events";
import { PlatformSniffer } from "~/app/common/platform/platform-sniffer";

@Component({
  selector: "page-header",
  templateUrl: "./page-header.component.html",
  styleUrls: ["./page-header.component.css"],
})
export class PageHeaderComponent implements OnInit {
  ngOnInit(): void {}

  @Input("title") title: string = '[Title Here]';

  isIOS(): boolean {
    return PlatformSniffer.isIos;
  }

  isAndroid(): boolean {
    return PlatformSniffer.isAndroid;
  }

  handleMenuTap() {
    AppEventBus.raiseEvent(EVENT_MENU_TAPPED);
  }
}

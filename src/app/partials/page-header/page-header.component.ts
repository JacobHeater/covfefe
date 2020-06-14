import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { isAndroid, isIOS } from "tns-core-modules/platform";

@Component({
  selector: "page-header",
  templateUrl: "./page-header.component.html",
  styleUrls: ["./page-header.component.css"],
})
export class PageHeaderComponent implements OnInit {
  ngOnInit(): void {}

  @Input("title") title: string;
  @Output("menuClick")menuClick: EventEmitter<void> = new EventEmitter();

  isIOS(): boolean {
    return isIOS;
  }

  isAndroid(): boolean {
    return isAndroid;
  }

  handleMenuClick() {
    this.menuClick.emit();
  }
}

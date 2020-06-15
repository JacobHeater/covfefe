import { Component, OnInit } from "@angular/core";
import { PageBase } from "~/app/common/page/page-base";

@Component({
  selector: "ns-roast",
  templateUrl: "./roast.component.html",
  styleUrls: ["./roast.component.css"],
})
export class RoastComponent extends PageBase implements OnInit {
  ngOnInit(): void {}

  static get title() {
    return 'Roast';
  }

  protected get $title(): string {
    return RoastComponent.title;
  }
}

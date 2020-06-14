import { Component, OnInit } from "@angular/core";
import { PageBase } from "../common/page/page-base";

@Component({
  selector: "ns-roast",
  templateUrl: "./roast.component.html",
  styleUrls: ["./roast.component.css"],
})
export class RoastComponent extends PageBase implements OnInit {
  ngOnInit(): void {}
  protected get $title(): string {
    return 'Roasting';
  }
}

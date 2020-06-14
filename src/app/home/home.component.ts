import { Component, OnInit } from "@angular/core";
import { PageBase } from "../common/page/page-base";

@Component({
  selector: "ns-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent extends PageBase implements OnInit {
  ngOnInit(): void {}

  get $title(): string {
    return 'Home';
  }
}
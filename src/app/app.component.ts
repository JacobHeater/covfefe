import { Component, ViewChild } from "@angular/core";
import { MenuItem } from "./models/menu/menu-item";
import { retrieveMenuItems } from "./common/menu";
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular/side-drawer-directives";
import { RouterExtensions } from "nativescript-angular/router";
import { AppEventBus, EVENT_MENU_TAPPED } from "./common/events";

@Component({
  selector: "ns-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  constructor(private routerExtensions: RouterExtensions) {
      AppEventBus.subscribe(EVENT_MENU_TAPPED, () => this.sideDrawerComponent.sideDrawer.toggleDrawerState());''
  }

  @ViewChild(RadSideDrawerComponent, {
    static: false,
  })
  sideDrawerComponent: RadSideDrawerComponent;

  public readonly appName: string = "Covfefe";
  public readonly icon: string = '\ue541';

  public menuItems: MenuItem[] = retrieveMenuItems();

  handleMenuTap(item: MenuItem) {
    this.sideDrawerComponent.sideDrawer.closeDrawer();
    this.routerExtensions.navigate(item.link);
  }
}

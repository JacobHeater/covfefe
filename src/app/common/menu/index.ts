import { MenuItem } from "../../models/menu/menu-item";
import { HomeComponent } from "~/app/home/home.component";
import { RoastComponent } from "~/app/roast/roast.component";
import { BrewComponent } from "~/app/brew/brew.component";

export function retrieveMenuItems(): MenuItem[] {
  return [
    {
      link: [''],
      text: HomeComponent.title
    },
    {
      link: ['/roast'],
      text: RoastComponent.title
    },
    {
      link: ['/brew'],
      text: BrewComponent.title
    },
  ];
}

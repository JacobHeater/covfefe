import { MenuItem } from "../../models/menu/menu-item";

export function retrieveMenuItems(): MenuItem[] {
  return [
    {
      link: [''],
      text: 'Home'
    },
    {
      link: ['/roast'],
      text: 'Roasting'
    },
    {
      link: ['/brew'],
      text: "Brewing",
    },
  ];
}

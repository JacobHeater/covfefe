import { Component, OnInit } from '@angular/core';
import { PageBase } from '~/app/common/page/page-base';

@Component({
  selector: 'ns-brew',
  templateUrl: './brew.component.html',
  styleUrls: ['./brew.component.css']
})
export class BrewComponent extends PageBase implements OnInit {
  ngOnInit(): void {}

  static get title() {
    return 'Brew';
  }

  protected get $title(): string {
    return BrewComponent.title;
  }
}

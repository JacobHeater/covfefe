import { Component, OnInit } from '@angular/core';
import { PageBase } from '../common/page/page-base';

@Component({
  selector: 'ns-brew',
  templateUrl: './brew.component.html',
  styleUrls: ['./brew.component.css']
})
export class BrewComponent extends PageBase implements OnInit {
  ngOnInit(): void {}
  protected get $title(): string {
    return 'Brewing';
  }
}

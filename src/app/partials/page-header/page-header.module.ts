import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { PageHeaderComponent } from './page-header.component';



@NgModule({
  declarations: [],
  imports: [
    NativeScriptCommonModule,
    PageHeaderComponent,
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class PageHeaderModule { }

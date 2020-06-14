import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { PageHeaderModule } from '../partials/page-header/page-header.module';

@NgModule({
  declarations: [],
  imports: [
    NativeScriptCommonModule,
    PageHeaderModule,
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class HomeModule { }

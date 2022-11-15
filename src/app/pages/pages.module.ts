import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomePageComponent} from "@pages/home-page/home-page.component";

const components = [
  HomePageComponent
]

@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule
  ]
})
export class PagesModule { }

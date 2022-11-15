import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomePageComponent} from "@pages/home-page/home-page.component";
import {ComponentsModule} from "@components/components.module";

const components = [
  HomePageComponent
]

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }

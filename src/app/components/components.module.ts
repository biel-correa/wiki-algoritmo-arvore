import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from "@components/navbar/navbar.component";
import { SectionComponent } from '@components/section/section.component';

const components = [
  NavbarComponent,
  SectionComponent
]

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }

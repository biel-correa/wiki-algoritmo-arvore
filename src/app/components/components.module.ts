import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from "@components/navbar/navbar.component";
import { SectionComponent } from '@components/section/section.component';
import { AlgorithmCardComponent } from './algorithm-card/algorithm-card.component';

const components = [
  NavbarComponent,
  SectionComponent,
  AlgorithmCardComponent
]

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }

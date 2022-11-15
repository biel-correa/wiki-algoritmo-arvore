import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomePageComponent} from "@pages/home-page/home-page.component";
import {ComponentsModule} from "@components/components.module";
import { BTreePageComponent } from './btree-page/btree-page.component';
import { BPlusTreePageComponent } from './bplus-tree-page/bplus-tree-page.component';
import { BStarTreePageComponent } from './bstar-tree-page/bstar-tree-page.component';
import { RedBlackTreePageComponent } from './red-black-tree-page/red-black-tree-page.component';

const components = [
  HomePageComponent,
  BTreePageComponent,
  BPlusTreePageComponent,
  BStarTreePageComponent,
  RedBlackTreePageComponent
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

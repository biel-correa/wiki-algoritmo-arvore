import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from '@pages/home-page/home-page.component';
import { ComponentsModule } from '@components/components.module';
import { ViewTreePageComponent } from './view-tree-page/view-tree-page.component';

const components = [HomePageComponent];

@NgModule({
  declarations: [...components, ViewTreePageComponent],
  exports: [...components],
  imports: [CommonModule, ComponentsModule],
})
export class PagesModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "@pages/home-page/home-page.component";
import {BTreePageComponent} from "@pages/btree-page/btree-page.component";
import {BPlusTreePageComponent} from "@pages/bplus-tree-page/bplus-tree-page.component";
import {BStarTreePageComponent} from "@pages/bstar-tree-page/bstar-tree-page.component";
import {RedBlackTreePageComponent} from "@pages/red-black-tree-page/red-black-tree-page.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'b-tree', component: BTreePageComponent },
  { path: 'b-plus-tree', component: BPlusTreePageComponent },
  { path: 'b-star-tree', component: BStarTreePageComponent },
  { path: 'red-black-tree', component: RedBlackTreePageComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

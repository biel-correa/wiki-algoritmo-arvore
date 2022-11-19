import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '@pages/home-page/home-page.component';
import { BTreePageComponent } from '@pages/btree-page/btree-page.component';
import { BPlusTreePageComponent } from '@pages/bplus-tree-page/bplus-tree-page.component';
import { BStarTreePageComponent } from '@pages/bstar-tree-page/bstar-tree-page.component';
import { RedBlackTreePageComponent } from '@pages/red-black-tree-page/red-black-tree-page.component';
import ROUTES from './models/routes.model';

const routes: Routes = [
  { path: '', redirectTo: ROUTES.HOME, pathMatch: 'full' },
  { path: ROUTES.HOME, component: HomePageComponent },
  { path: ROUTES.B_TREE, component: BTreePageComponent },
  { path: ROUTES.B_PLUS_TREE, component: BPlusTreePageComponent },
  { path: ROUTES.B_STAR_TREE, component: BStarTreePageComponent },
  { path: ROUTES.RED_BLACK_TREE, component: RedBlackTreePageComponent },
  { path: '**', redirectTo: ROUTES.HOME },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

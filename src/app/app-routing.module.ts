import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '@pages/home-page/home-page.component';
import ROUTES from './models/routes.model';
import { ViewTreePageComponent } from './pages/view-tree-page/view-tree-page.component';

const routes: Routes = [
  { path: '', redirectTo: ROUTES.HOME, pathMatch: 'full' },
  { path: ROUTES.HOME, component: HomePageComponent },
  { path: ROUTES.TREE, component: ViewTreePageComponent },
  { path: '**', redirectTo: ROUTES.HOME },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { Routes } from '@angular/router';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { ViewByNameComponent } from './view-by-name/view-by-name.component';

export const routes: Routes = [
  { path: 'view-all', component: ViewAllProductsComponent },
  { path: 'view-by-name', component: ViewByNameComponent },
];

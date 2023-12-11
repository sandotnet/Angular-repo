import { Routes } from '@angular/router';
import { ImageUpadComponent } from './image-upad/image-upad.component';
import { GetProductsComponent } from './get-products/get-products.component';

export const routes: Routes = [
  { path: 'img-upload', component: ImageUpadComponent },
  { path: 'get-all', component: GetProductsComponent },
];

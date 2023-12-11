import { Routes } from '@angular/router';
import { ImageUpadComponent } from './image-upad/image-upad.component';
import { GetProductsComponent } from './get-products/get-products.component';
import { AddProductComponent } from './add-product/add-product.component';

export const routes: Routes = [
  // { path: 'img-upload', component: ImageUpadComponent },
  { path: 'get-all', component: GetProductsComponent },
  { path: 'add-product', component: AddProductComponent },
];

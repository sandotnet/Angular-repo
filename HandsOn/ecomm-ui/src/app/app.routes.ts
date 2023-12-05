import { Routes } from '@angular/router';
import { RegisterComponent } from './Pages/register/register.component';
import { LoginComponent } from './Pages/login/login.component';
import { AddProductComponent } from './Pages/add-product/add-product.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { GetAllProductsComponent } from './Pages/get-all-products/get-all-products.component';
import { CustomerDashboardComponent } from './Pages/customer-dashboard/customer-dashboard.component';
import { AdminDashboardComponent } from './Pages/admin-dashboard/admin-dashboard.component';
import { SearchComponent } from './Pages/search/search.component';

export const routes: Routes = [
  {
    path: 'customer-dashboard',
    component: CustomerDashboardComponent,
    children: [
      { path: 'search', component: SearchComponent },
      { path: 'login', component: LoginComponent },
    ],
  },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    children: [
      { path: 'getall', component: GetAllProductsComponent },
      { path: 'add-product', component: AddProductComponent },
      { path: 'login', component: LoginComponent },
    ],
  },
  {path:'demo',component:AddProductComponent},
  { path: '', component: LoginComponent },
];

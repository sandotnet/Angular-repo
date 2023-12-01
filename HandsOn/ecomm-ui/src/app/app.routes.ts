import { Routes } from '@angular/router';
import { RegisterComponent } from './Pages/register/register.component';
import { LoginComponent } from './Pages/login/login.component';
import { AddProductComponent } from './Pages/add-product/add-product.component';
import { AdminDashboardComponent } from './Pages/admin-dashboard/admin-dashboard.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
];

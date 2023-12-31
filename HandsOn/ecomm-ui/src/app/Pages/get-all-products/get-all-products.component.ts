import { Component } from '@angular/core';
import { Product } from '../../Models/product';
import { CommonModule } from '@angular/common';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';

@Component({
  selector: 'app-get-all-products',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './get-all-products.component.html',
  styleUrl: './get-all-products.component.css'
})
export class GetAllProductsComponent {
  products: Product[] = [];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };
  constructor(private http: HttpClient) {
    this.http
      .get<Product[]>(
        'http://localhost:5175/api/Product/GetAllProducts',
        this.httpOptions
      )
      .subscribe((response) => {
        this.products = response;
        console.log(this.products);
      });
  }
}

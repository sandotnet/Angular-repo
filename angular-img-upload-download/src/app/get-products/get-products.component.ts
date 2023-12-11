import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-get-products',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './get-products.component.html',
  styleUrl: './get-products.component.css',
})
export class GetProductsComponent {
  products: Product[] = [];
  constructor(private http: HttpClient) {
    this.http
      .get<Product[]>('http://localhost:5106/api/ImageUpload/GetProducts')
      .subscribe((res) => {
        this.products = res;
        console.log(this.products);
      });
  }
}

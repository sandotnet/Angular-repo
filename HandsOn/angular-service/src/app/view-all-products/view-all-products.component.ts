import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-all-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-all-products.component.html',
  styleUrl: './view-all-products.component.css',
  providers: [ProductService], //register service in a component
})
export class ViewAllProductsComponent {
  products: Product[] = [];
  //created object to service using dependency injection
  constructor(private productService: ProductService) {
    this.products = this.productService.getAllProducts();
    console.log(this.products);
  }
}

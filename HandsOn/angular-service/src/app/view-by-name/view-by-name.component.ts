import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-by-name',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './view-by-name.component.html',
  styleUrl: './view-by-name.component.css',
  providers: [ProductService],
})
export class ViewByNameComponent {
  product_name: string = '';
  product: Product;
  isAvailable: boolean = false;
  errMsg: string = '';
  constructor(private productService: ProductService) {
    this.product = new Product();
  }
  search() {
    console.log(this.product_name);
    this.product = this.productService.getProductByName(this.product_name);
    console.log(this.product);
    if (this.product != null) {
      this.isAvailable = true;
      this.errMsg='';
    } else {
      this.isAvailable = false;
      this.errMsg = 'Invalid Product Name';
    }
  }
}

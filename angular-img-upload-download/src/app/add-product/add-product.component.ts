import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../product';
import { ImageUpadComponent } from '../image-upad/image-upad.component';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule, HttpClientModule, ImageUpadComponent],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent {
  item: Product;
  constructor(private http: HttpClient) {
    this.item = new Product();
  }
  save() {
    this.item.path = localStorage.getItem('product_img');
    console.log(this.item);
    this.http
      .post('http://localhost:5106/api/ImageUpload/AddProduct', this.item)
      .subscribe((res) => {
        console.log(res);
      });
  }
}

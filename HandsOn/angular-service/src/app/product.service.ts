import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [];
  constructor() {
    this.products = [
      { id: 1, name: 'Mouse', stock: 30, price: 300 },
      { id: 2, name: 'Keyboard', stock: 230, price: 800 },
      { id: 3, name: 'Cup', stock: 130, price: 200 },
      { id: 4, name: 'Pen', stock: 40, price: 100 },
      { id: 5, name: 'Book', stock: 20, price: 200 },
    ];
  }
  getAllProducts(): Product[] {
    return this.products;
  }
  getProductByName(name: string): any {
    //get a product by Name
    return this.products.find((p) => p.name == name);
  }
  addProduct(item: Product) {
    this.products.push(item);
  }
}

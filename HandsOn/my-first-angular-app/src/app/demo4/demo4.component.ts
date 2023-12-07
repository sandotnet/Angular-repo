import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cart } from '../cart';

@Component({
  selector: 'app-demo4',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo4.component.html',
  styleUrl: './demo4.component.css',
})
export class Demo4Component {
  carts: Cart[] = [
    new Cart('Mouse', 1000, 5, 2),
    new Cart('Bottle', 1000, 15, 2),
    new Cart('Cup', 1000, 25, 3),
    new Cart('Book', 1000, 35, 2),
  ];
  carts1: any[] = [];
  qty: number = 0;
  gtotal: number = 0;
  rowcount: number = 0;
  constructor() {
    for (let item of this.carts) {
      this.carts1.push({
        Name: item.productName,
        Price: item.price,
        Discount: item.discount,
        DiscoutedPrice: item.price - (item.price * item.discount) / 100,
        Qty: item.qty,
        Total: (item.price - (item.price * item.discount) / 100) * item.qty,
      });
    }
  }

  selectQty(e: any) {
    this.qty = e.target.value;
  }
  setTotal() {
    for (let item of this.carts1) {
      this.gtotal = this.gtotal + item.Total;
      this.rowcount++;
    }
  }
}

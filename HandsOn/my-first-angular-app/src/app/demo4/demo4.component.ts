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
    new Cart('Mouse', 1000, 5, 10),
    new Cart('Bottle', 1000, 15, 10),
    new Cart('Cup', 1000, 25, 10),
    new Cart('Book', 1000, 35, 10),
  ];
  qty: number = 2;
  total: number = 0;
  constructor() {
    //this.getTotal();
  }
  getTotal():number {
    for (let cart of this.carts) {
      this.total += cart.tot;
    }
    return this.total
  }
}

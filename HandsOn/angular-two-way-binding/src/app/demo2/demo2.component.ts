import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../product';
@Component({
  selector: 'app-demo2',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './demo2.component.html',
  styleUrl: './demo2.component.css',
})
export class Demo2Component {
  item:Product;
  constructor()
  {
    this.item=new Product();
  }
}

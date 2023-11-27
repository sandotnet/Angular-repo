import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { GreetPipe } from './greet.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, GreetPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-pipes demo';
  orderDate: Date = new Date(); //returns today date
  salary: number = 34209;
  productName: string = 'Iphone 15 Max Pro';
  stock: number = 439.3240432934;
  token: number = 8;
  price: number = 20;
  avg_marks: number = 0.89;
  products: any = [
    { id: 1, name: 'Mouse', price: 500 },
    { id: 2, name: 'Keyboar', price: 1500 },
    { id: 3, name: 'Cup', price: 200 },
  ];
}

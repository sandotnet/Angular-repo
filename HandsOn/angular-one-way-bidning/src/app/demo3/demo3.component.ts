import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from '../employee';

@Component({
  selector: 'app-demo3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo3.component.html',
  styleUrl: './demo3.component.css',
})
export class Demo3Component {
  //employee object
  obj: Employee;
  constructor() {
    this.obj = new Employee(); //instatiate employee
    this.obj.id = 32033;
    this.obj.name = 'Varun';
    this.obj.email = 'varun@gmail.com';
    this.obj.designation = 'Developer';
    this.obj.mobile = '909890989';
    this.obj.salary = 50000;
    this.obj.joinDate = new Date(2021, 3, 21);
  }
}

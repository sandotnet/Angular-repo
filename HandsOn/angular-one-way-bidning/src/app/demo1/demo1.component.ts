import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo1.component.html',
  styleUrl: './demo1.component.css',
})
export class Demo1Component {
  //component data
  id: number = 43232;
  name: string = 'Virat';
  age: number = 34;
  dob: Date = new Date(2000, 2, 23);
}

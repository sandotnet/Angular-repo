import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo4',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo4.component.html',
  styleUrl: './demo4.component.css',
})
export class Demo4Component {
  city: string = 'Hyderabad';
  cities: string[] = ['Pune', 'Chennai', 
  'Hyderabad', 'Bangalore'];
  marks: number[] = [56, 78, 89, 90, 67, 78];
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo7',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo7.component.html',
  styleUrl: './demo7.component.css',
})
export class Demo7Component {
  title: string = 'Good Morning Users!!';
  name:string='Virat';
  setTitle() { //method or handler
    this.title = 'Good Night Users!!';
  }
  setName()
  {
    this.name='Rohith';
  }
}

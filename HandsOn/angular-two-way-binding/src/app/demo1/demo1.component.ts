import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-demo1',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './demo1.component.html',
  styleUrl: './demo1.component.css',
})
export class Demo1Component {
  name: string = 'Virat';
  setName() {
    this.name = 'Rahul';
  }
}

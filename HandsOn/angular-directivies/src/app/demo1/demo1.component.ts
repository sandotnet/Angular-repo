import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./demo1.component.css'],
})
export class Demo1Component {
  isVisible = false;
  constructor() {}

  setVisible() {
    if (this.isVisible == true) {
      this.isVisible = false;
    } else if (this.isVisible == false) {
      this.isVisible = true;
    }
  }
}

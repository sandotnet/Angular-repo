import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { Demo1Component } from './demo1/demo1.component';
// Decorator
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DemoComponent,Demo1Component,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular App';
  constructor() {}
  M1(): void {}
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo6',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo6.component.html',
  styleUrl: './demo6.component.css',
})
export class Demo6Component {
  url: string = 'http://www.google.co.in';
  img_src: string = '../../assets/img1.jpg';
  width: number = 400;
  height: number = 400;
  userName:string='Virat'
  title:string='Property binding demo!!'
  email:string='virat@gmail.com'
  link_text:string='Google'
}

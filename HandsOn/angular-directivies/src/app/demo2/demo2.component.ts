import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo2',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component implements OnInit {
cities=["Chennai","Bangalore","Hyderabad","Mumbai"];
  constructor() { }

  ngOnInit(): void {
  }

}

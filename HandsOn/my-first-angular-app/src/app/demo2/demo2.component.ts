import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-demo2',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './demo2.component.html',
  styleUrl: './demo2.component.css',
})
export class Demo2Component {
  cities = [
    { id: 1, name: 'Chennai' },
    { id: 2, name: 'Vizag' },
    { id: 3, name: 'Hyd' },
    { id: 4, name: 'Bangalore' },
  ];
  items = [
    { mid: 1, mname: 'm1', id: 1 },
    { mid: 2, mname: 'm2', id: 1 },
    { mid: 3, mname: 'm3', id: 2 },
    { mid: 4, mname: 'm4', id: 2 },
    { mid: 5, mname: 'm5', id: 3 },
    { mid: 6, mname: 'm6', id: 3 },
    { mid: 7, mname: 'm7', id: 4 },
    { mid: 8, mname: 'm8', id: 4 },
    { mid: 9, mname: 'm9', id: 4 },
  ];
  multiplex: any = [];
  cid: number = 0;
  mid: number = 0;
  constructor()
  {
    
  }
  getMultiplex() {
    this.multiplex = this.items.filter((m) => m.id == this.cid);
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent {
  // items = [
  //   { sid: 1, sname: 'http://www.abc.com' },
  //   { sid: 2, sname: 'http://www.bbc.com' },
  //   { sid: 3, sname: 'http://www.cbc.com' },
  // ];
  

  
  getlocations()
  {

  }
}

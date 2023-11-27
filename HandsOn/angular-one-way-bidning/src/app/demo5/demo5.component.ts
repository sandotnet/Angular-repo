import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from '../employee';
@Component({
  selector: 'app-demo5',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo5.component.html',
  styleUrl: './demo5.component.css',
})
export class Demo5Component {
  //employee array
  employees: Employee[] = []; //empty array
  constructor() {
    //initiate employee array
    this.employees = [
      {
        id: 34,
        name: 'Raj',
        email: 'raj@gamil.com',
        mobile: '9098909890',
        salary: 50000,
        designation: 'Sr Programmer',
        joinDate: new Date(2021, 2, 23),
      },
      {
        id: 45,
        name: 'Ashish',
        email: 'ashish@gamil.com',
        mobile: '9098909890',
        salary: 30000,
        designation: 'Programmer',
        joinDate: new Date(2022, 2, 23),
      },
      {
        id: 56,
        name: 'Mounika',
        email: 'mounica@gamil.com',
        mobile: '9023909890',
        salary: 40000,
        designation: 'Programmer',
        joinDate: new Date(2020, 2, 23),
      },
      {
        id: 67,
        name: 'Narmada',
        email: 'narmada@gamil.com',
        mobile: '9678909890',
        salary: 80000,
        designation: 'TeamLead',
        joinDate: new Date(2019, 2, 23),
      },
      {
        id: 66,
        name: 'Sarath',
        email: 'sarath@gamil.com',
        mobile: '9056709890',
        salary: 30000,
        designation: 'Programmer',
        joinDate: new Date(2022, 2, 23),
      },
    ];
  }
}

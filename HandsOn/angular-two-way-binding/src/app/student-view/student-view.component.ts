import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../student';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-student-view',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-view.component.html',
  styleUrl: './student-view.component.css',
})
export class StudentViewComponent {
  student: Student;
  students: Student[] = []; //empty array
  stds: number[] = [1, 2, 3, 4, 5];
  constructor() {
    this.student = new Student(); //iniate model
  }
  AddStudent(): void {
    //add Id and IsSubscribed
    this.student.id = Math.ceil(Math.random() * 1000); //genereate random values between 1000
    //this.student.IsSubscribed = false;
    console.log(this.student);
    //add student details to array
    this.students.push(this.student);
    console.log(this.students);
    //re-initiate student
    this.student = new Student();
  }
}

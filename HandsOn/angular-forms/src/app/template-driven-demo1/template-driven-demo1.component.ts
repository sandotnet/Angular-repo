import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../user';
@Component({
  selector: 'app-template-driven-demo1',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-driven-demo1.component.html',
  styleUrl: './template-driven-demo1.component.css',
})
export class TemplateDrivenDemo1Component {
  user: User;
  constructor() {
    this.user = new User();
  }

  onSubmit(): void {
    console.log(JSON.stringify(this.user, null, 2));
    //here invoke api endpoint using http client
  }

  onReset(form: NgForm): void {
    form.reset();
  }
}

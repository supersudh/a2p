import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent{
  user = {
    username: 'Max',
    email: 'chris@test.com',
    password: 'test',
    gender: 'male'
  };

  genders = [
    'male',
    'female'
  ];

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}

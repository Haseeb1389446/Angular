import { Component } from '@angular/core';
import {  FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  myForm: any;
  users: any = [];

  constructor(private fb : FormBuilder){
    this.myForm = fb.group({
      uname: [''],
      uage: [''],
      uemail: [''],
      upass: ['']
    })
  }

  dataSend(){
    this.users.push(this.myForm.value);
    console.log(this.users);
  }

}

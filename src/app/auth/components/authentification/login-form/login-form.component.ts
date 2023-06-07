import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent implements OnInit{
  loginForm! : FormGroup;


  constructor( private fb:FormBuilder , private router:Router, private auth: AuthService){
  }
  ngOnInit(){

    this.loginForm = this.fb.group({
      login:['', Validators.required],
      password:['',Validators.required]
    })
  }

  getErrorMessage() {
      return 'You must enter a value';
  }

  Valider() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.auth.login(this.loginForm.value)
    }
  }
}

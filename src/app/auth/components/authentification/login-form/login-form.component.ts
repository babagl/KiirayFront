import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Observable, of} from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent implements OnInit{

  loginForm! : FormGroup;
  loader$!: Observable<boolean>
  msgError!: string
  isError !: Observable<boolean>


  constructor( private fb:FormBuilder , private router:Router, private auth: AuthService){}

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
        this.loader$ = this.auth.loading$;
        this.auth.login(this.loginForm.value)
          .subscribe(
            value => console.log(value),
            error => {
              this.msgError = error.error
              console.log(this.msgError)
              this.loader$ = of(false)
            }
          )
    }
  }
}

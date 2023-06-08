import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Observable, map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.scss']
})
export class PasswordChangeComponent implements OnInit{

  constructor(private fb: FormBuilder, private auth: AuthService, private route: ActivatedRoute){}

  passwordForm!: FormGroup

  passwordCtrl = new FormControl('', Validators.required)
  confirmCtrl = new FormControl('', Validators.required)

  loader$!: Observable<boolean>
  

  ngOnInit(): void {
      this.passwordForm = this.fb.group({
         password: this.passwordCtrl
      })
  }

  isMatchedPasswords$(ctrl: FormControl):Observable<boolean>{
    return ctrl.valueChanges.pipe(
      map(value =>  value !== this.passwordCtrl.value)
    );
  }

  onSubmit(){
    this.loader$ = this.auth.loading$
    const id = +this.route.snapshot.params['id'];
    this.auth.updatePassword(this.passwordForm.value, id).subscribe(
      value => console.log(value)
    )
  }
  
}

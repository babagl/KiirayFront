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
  isMatched!: Boolean

  passwordCtrl = new FormControl('', Validators.required)
  confirmCtrl = new FormControl('', Validators.required)

  loader$!: Observable<boolean>
  ngPassWordMatch(){ 
      return 'Les deux mot de passe ne sont pas identiques'
  }

  ngOnInit(): void {
      this.isMatchedPasswords$(this.confirmCtrl)
      this.passwordForm = this.fb.group({
         password: this.passwordCtrl
      })
  }

  private isMatchedPasswords$(ctrl: FormControl){
    ctrl.valueChanges.pipe(
      map(value =>  {
        this.isMatched = value === this.passwordCtrl.value ? true : false
        console.log(this.isMatched);
        
      })
      
    )
    .subscribe();
  }

  onSubmit(){
    this.loader$ = this.auth.loading$
    const id = +this.route.snapshot.params['id'];
    this.auth.updatePassword(this.passwordForm.value, id).subscribe(
      value => console.log(value)
    )
  }
  
}

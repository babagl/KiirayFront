import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { User, UserConnect } from '../models/userConnect.model';
import { environment } from 'src/environments/environment.development';
import  jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _tokenSubject: BehaviorSubject<string>;
  

  constructor(private http: HttpClient, private router: Router) {
    this._tokenSubject = new BehaviorSubject<string>(localStorage.getItem('token')!)
  }

  get tokenValue(){
    return this._tokenSubject.value;
  }
  
  login(user: UserConnect):void{
      this.http.post(`${environment.apiUrl}/security/login`, user).pipe(
        map( response => {
          console.log(response)
          // if (!JSON.parse(response.isFirstConnection.toLowerCase())) {
          //     localStorage.setItem('token', response.token);
          //     this._tokenSubject.next(response.token);

          //     const decodedToken: any = jwt_decode(response.token);
          //     console.log(decodedToken);
              
          //     // this.getUserById(+decodedToken.jti).pipe(
          //     //   map(user => {
          //     //       console.log(user);
          //     //   })
          //     // ).subscribe()
          // }else{
          //   this.router.navigateByUrl('/auth/password-change');
          // }
        })
      ).subscribe()
  }

  getUserById(id: number):Observable<User>{
    return this.http.get<any>(`${environment.apiUrl}/users/${id}`);
  }

}

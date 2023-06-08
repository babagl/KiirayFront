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
  private _userConnect: BehaviorSubject<any>;
  private _loading$ = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {
    this._tokenSubject = new BehaviorSubject<string>(localStorage.getItem('token')!);
    this._userConnect = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('userConnect')!));
  }

  /**
   * Retourne la valeur du token d'authentification de l'utilisateur connecté
   * @readonly
   * @memberof AuthService
   */
  get tokenValue(){
    return this._tokenSubject.value;
  }
  
  /**
   * Retourne un objet de type {firstName: string, lastName: string} contenant 
   * le prénom et le nom de utilisateur connecté 
   * @readonly
   * @memberof AuthService
   */
  get userValue(){
    return this._userConnect.value;
  }

  /**
   * Observable de boolean permettant de lancer le loader 
   * sur le formulaire de connexion
   * @readonly
   * @memberof AuthService
   */
  get loading$(){
    return this._loading$.asObservable();
  }

  /**
   * Methode d'authentification des utilisateurs
   * @param user un objet de type {login: string, password: string}
   */
  login(user: UserConnect):void{
      this._loading$.next(true);
      this.http.post(`${environment.apiUrl}/security/login`, user).pipe(
        map( (response: any) => {
          if (response.isFirstConnection == "false" ) {

            this._tokenSubject.next(response.token);
            localStorage.setItem('token', response.token);

            const decodedToken: any = jwt_decode(response.token); 
            this.getUserById(+(decodedToken.jti)).pipe(
              map(user => {
                const userConnected = {firstName: user.prenom, nom: user.nom};
                localStorage.setItem('userConnect', JSON.stringify(userConnected));
                this._userConnect.next(userConnected);
                  if (user.roles.includes("AGENT") || user.roles.includes("ADMIN")) {
                      this.router.navigateByUrl('/interne');
                  }else{
                    this.router.navigateByUrl('/externe');
                  }
                  this._loading$.next(false);
                })
              ).subscribe()
          }else{
            if(response.userId){
              const id = +response.userId;
              this.router.navigateByUrl('/auth/password-change/'+id);
              this._loading$.next(false);
            }
          }
        })
      ).subscribe()
  }

  /**
   * Retourne un Observable de User à partir de son id
   * @param id un entier correspondant à l'identifiant de l'utilisateur
   * @returns Observable de User
   */
  getUserById(id: number):Observable<User>{
    return this.http.get<any>(`${environment.apiUrl}/users/${id}`);
  }

  /**
   * Permet de changer le mot de passe d'un utilisateur suite à sa première connexion 
   * @param userPassword un objet de type { password: string } dont la valeur est le nouveau mot de passe
   * @param id id de l'utilisateur en question
   * @returns 
   */
  updatePassword(userPassword: {password: string}, id: number):Observable<any>{
      this._loading$.next(true);
      return this.http.put<any>(`${environment.apiUrl}/security/${id}/firstConnection`, userPassword).pipe(
          map(response => {
              if (response.token) {
                  this.router.navigateByUrl('/auth/login');
                  this._loading$.next(false)
              }
          })
      )
  }


}

import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationService {

  // currentUser = signal<User | undefined | null>(undefined);

  private _userSub = new BehaviorSubject<User | null>(null);
  public readonly user$ = this._userSub.asObservable();


  constructor(private http: HttpClient) { }

  createUser(): void {
    const url:string = ``;
    // this.http.post()
  }

  loginUser(body:any): Observable<User> {
    const url:string = `https://dummyjson.com/auth/login`;
    return this.http.post<User>(url,body).pipe(
      tap(user => {
        this._userSub.next(user);
      })
    );
  }

  logOutUser():void{
    this._userSub.next(null);
  }

  getUser(): void {

  }

}

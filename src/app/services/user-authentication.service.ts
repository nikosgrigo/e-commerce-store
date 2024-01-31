import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationService {

  private _userSub = new BehaviorSubject<User | null>(null);
  public readonly user$ = this._userSub.asObservable();


  constructor(private http: HttpClient) { }

  createUser(body: any): Observable<User> {
    const url: string = `https://dummyjson.com/users/add`;
    return this.http.post<User>(url, body).pipe(
      tap(newUser => {
        console.table(newUser);
        this._userSub.next(newUser);
      })
    );
  }

  loginUser(body: any): Observable<User> {
    const url: string = `https://dummyjson.com/auth/login`;
    return this.http.post<User>(url, body).pipe(
      tap(user => {
        this._userSub.next(user);
      })
    );
  }

  logOutUser(): void {
    this._userSub.next(null);
  }

  getUser(): void {

  }

}

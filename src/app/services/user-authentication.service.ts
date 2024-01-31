import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationService {

  constructor(private http: HttpClient) { }

  createUser(): void {
    const url:string = ``;
    // this.http.post()
  }

  loginUser(): void {
    const url:string = `https://dummyjson.com/auth/login`;
  }

  getUser(): void {

  }

}

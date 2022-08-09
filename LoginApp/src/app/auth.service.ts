import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl="http://localhost:8080/api/login";
  constructor(private http: HttpClient) { }

  login(user:User):Observable<any>{
    console.log(user);
    return this.http.post(`${this.loginUrl}`,user);
  }
}

import { MitifyUser } from './mitify_user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  signInURL: string = "https://fathomless-eyrie-95662.herokuapp.com/mitify_users/sign_in";

constructor(private http: HttpClient) { }

  userSignIn(user: MitifyUser): Observable<any> {
    return this.http.post<any>(this.signInURL, user, {
      responseType: 'json',
      observe: 'response'});
  }

}

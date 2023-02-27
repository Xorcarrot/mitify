import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  author!: string;
  role!: string;
  eMail!: string;
  token!: any;

constructor() { }

setUserData(author: string, role: string, eMail: string): void {
  this.author = author;
  this.role = role;
  this.eMail = eMail;
}

getAuthor(): string {
  return this.author;
}

getRole(): string {
  return this.role;
}

getEmail(): string {
  return this.eMail;
}

getToken(): any {
  return this.token;
}

setToken(token: any): any {
  this.token = token;
}

}

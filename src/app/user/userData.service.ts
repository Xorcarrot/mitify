import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  id!: any;
  eMail!: any;
  name!: any;
  first_name!: any;
  role_id!: any;
  
  token!: any;


constructor() { }

setUserData(id: any, eMail: any, name: any, first_name: any, role_id: any): void {
  this.id = id;
  this.eMail = eMail;
  this.name = name;
  this.first_name = first_name;
  this.role_id = role_id;
}

getAuthor(): string {
  return this.first_name + ' ' + this.name;
}

getRole(): number {
  return this.role_id;
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

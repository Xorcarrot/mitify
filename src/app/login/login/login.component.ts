import { UserManagementService } from './../../user/userManagement.service';
import { Observable } from 'rxjs';
import { MitifyUser } from './../../user/mitify_user';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  hide: boolean = true;

  @Output() userName = new EventEmitter<string>();
  @Output() userToken = new EventEmitter<any>();

  /**Passwort vorraussetzung um als korrekt ausgewertet zu werden:
   * 
   * -Mindestens 8 chars
   * -einen Kleinbuchstaben
   * -einen Großbuchstaben
   * -eine Nummer
   * -ein Spezialzeichen
   * **/
  loginFormGroup = this._formBuilder.group({
    email: ['', [
      Validators.required,
      //Validators.email
    ]],
    password: ['', [
      Validators.required,
      Validators.minLength(7),
      //Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')
    ]]
  })

  constructor(private _formBuilder: FormBuilder, private userManagement: UserManagementService) {
    
  }

  getErrorMessage() {
    if (this.loginFormGroup.controls['email'].hasError('required')) {
      return 'Geben Sie eine gültige Email an';
    }

    return this.loginFormGroup.controls['email'].hasError('email') ? 'Keine Richtige Email' : '';
  }

  logIn(email: any, password: any): void {
    let userTry = new MitifyUser(email, password);
    this.userManagement.userSignIn(userTry).subscribe((res: HttpResponse<any>) => {
      this.userName.emit(userTry.mitify_user.email);
      this.userToken.emit(res.headers.get('Authorization'));
    });
  }

}

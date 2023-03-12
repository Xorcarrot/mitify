import { UserResponse } from './../../user/userResponse';
import { UserDataService } from 'src/app/user/userData.service';
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
  loading$: boolean = false;
  error: string = '';

  @Output() userName = new EventEmitter<string>();
  @Output() userRole = new EventEmitter<number>();

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

  constructor(private _formBuilder: FormBuilder, private userManagement: UserManagementService, public userData: UserDataService) {
    
  }

  getErrorMessage() {
    if (this.loginFormGroup.controls['email'].hasError('required')) {
      return 'Geben Sie eine gültige Email an';
    }

    return this.loginFormGroup.controls['email'].hasError('email') ? 'Keine Richtige Email' : '';
  }

  logIn(email: any, password: any): void {
    this.loading$ = true;
    let userTry = new MitifyUser(email, password);
    this.userManagement.userSignIn(userTry).subscribe((res: HttpResponse<UserResponse>) => {
      this.userData.setToken(res.headers.get('Authorization'));
      this.userData.setUserData(res.body?.user.id, res.body?.user.email, res.body?.user.name, res.body?.user.first_name, res.body?.user.role_id);
      this.userName.emit(this.userData.getAuthor());
      this.userRole.emit(this.userData.role_id);
      console.log('Hallo ' + res.body?.user.name + ', du bist jetzt eingeloggt!');
    }, error => {
      this.error = "Ihre Benutzer Passwort Kombination ist Falsch!";
    });
    this.loading$ = false;
  }

}

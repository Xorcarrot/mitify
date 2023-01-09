import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  hide: boolean = true;

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
      Validators.email
    ]],
    password: ['', [
      Validators.required,
      Validators.minLength(7),
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')
    ]]
  })

  constructor(private _formBuilder: FormBuilder) {
    
  }

  getErrorMessage() {
    if (this.loginFormGroup.controls['email'].hasError('required')) {
      return 'Geben Sie eine gültige Email an';
    }

    return this.loginFormGroup.controls['email'].hasError('email') ? 'Keine Richtige Email' : '';
  }

}

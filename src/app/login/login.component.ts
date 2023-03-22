import { UserResponse } from '../user/userResponse';
import { UserDataService } from 'src/app/user/userData.service';
import { UserManagementService } from '../user/userManagement.service';
import { MitifyUser } from '../user/mitify_user';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';

/**
 * Login Component für die Eingabe von Userdaten und deren Validierung.
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  /**
   * Param ob Passwort sichtbar oder nicht
   */
  hide: boolean = true;
  /**
   * Param der sagt ob Spinner erscheinen soll.
   */
  loading$: boolean = false;
  /**
   * Bei Fehlgeschlagener Anmeldung wird hier der Error gespeichert
   */
  error: string = '';

  /**
   * Event gibt Parent den Name des User zurück
   */
  @Output() userName = new EventEmitter<string>();
  /**
   * Event gibt Parent die Rolle des User zurück
   */
  @Output() userRole = new EventEmitter<number>();

  /**
   * Formular das die Einlogdaten validiert.
   *
   * Passwort vorraussetzung um als korrekt ausgewertet zu werden:
   * -Mindestens 8 chars
   * -einen Kleinbuchstaben
   * -einen Großbuchstaben
   * -eine Nummer
   * -ein Spezialzeichen
   * **/
  loginFormGroup = this._formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(7),
        Validators.pattern(
          '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{7,}'
        ),
      ],
    ],
  });

  /**
   * Constructor injeziert mehrere Service
   * @param _formBuilder Zum erstellen von Formularen
   * @param userManagement Beinhaltet alle Funktion für den User
   * @param userData Beinhaltet alle Informationen zum User
   */
  constructor(
    private _formBuilder: FormBuilder,
    private userManagement: UserManagementService,
    public userData: UserDataService
  ) {}

  /**
   * Funktion für das Rückgeben einer geeigneten Fehlermeldung.
   * @returns {string} String mit Errormeldung
   */
  getErrorMessage() {
    if (this.loginFormGroup.controls['email'].hasError('required')) {
      return 'Geben Sie eine gültige Email an';
    }

    return this.loginFormGroup.controls['email'].hasError('email')
      ? 'Keine Richtige Email'
      : '';
  }

  /**
   * Funktion die den Anmeldeprozess mit dem Backend startet
   * @param email Emailadresse des Users
   * @param password Passwort des Users
   * @todo Anmeldung soll nicht mit dem Backendserver geschehen sondern mit den IU Daten
   */
  logIn(email: any, password: any): void {
    this.loading$ = true;
    let userTry = new MitifyUser(email, password);
    this.userManagement.userSignIn(userTry).subscribe(
      (res: HttpResponse<UserResponse>) => {
        this.userData.setToken(res.headers.get('Authorization'));
        this.userData.setUserData(
          res.body?.user.id,
          res.body?.user.email,
          res.body?.user.name,
          res.body?.user.first_name,
          res.body?.user.role_id
        );
        this.userName.emit(this.userData.getAuthor());
        this.userRole.emit(this.userData.role_id);
        console.log(
          'Hallo ' + res.body?.user.name + ', du bist jetzt eingeloggt!'
        );
        this.loading$ = false;
      },
      (error) => {
        this.error = 'Falsche Nutzerdaten!';
        this.loading$ = false;
      }
    );
  }
}

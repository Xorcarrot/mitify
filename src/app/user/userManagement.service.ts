import { MitifyUser } from './mitify_user';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**
 * Service für Funktionen die den User betreffen. SignIn und SignOut
 * @todo URLs für Backend sollen in einem Enum gespeichert werden
 */
@Injectable({
  providedIn: 'root',
})
export class UserManagementService {
  signInURL: string =
    'https://fathomless-eyrie-95662.herokuapp.com/mitify_users/sign_in';
  dataURL: string =
    'https://fathomless-eyrie-95662.herokuapp.com/api/v1/member-data';
  signOutURL: string =
    'https://fathomless-eyrie-95662.herokuapp.com/mitify_users/sign_out';

  /**
   * Injeziert Service
   * @param http Für Kommunikation mit Backend
   */
  constructor(private http: HttpClient) {}

  /**
   * Funktion die die Anmeldedaten des Users zum Backend sendet und bei Erfolg alle Informationen zum User Rücksendet
   * @param user Anmeldedaten des Users
   * @returns {Observable} Alle Daten des Users
   */
  userSignIn(user: MitifyUser): Observable<any> {
    return this.http.post<any>(this.signInURL, user, {
      responseType: 'json',
      observe: 'response',
    });
  }

  /**
   * Funktion zum testen des Tokens und der Backendverbindung
   * @param token Token des Users
   * @returns {Observable} Erfolgsbestätigung mit Antwort vom Backend
   * @todo vor Releas entfernen
   */
  getData(token: any): Observable<any> {
    let headers = new HttpHeaders().set('Authorization', token);
    return this.http.get<any>(this.dataURL, { headers: headers });
  }

  /**
   * Funktion die die Abmeldung des Users übernimmt. Bei Erfolg wird eine Bestätigung Rückgesendet
   * @param token Token des Users
   * @returns {Observable} Antwort des Servers
   * @todo alle Methoden die diese Methode aufrufen müssen zu Async Refactored werden!!!!!!!!!
   */
  userSignOut(token: any): Observable<any> {
    let headers = new HttpHeaders().set('Authorization', token);
    return this.http.delete(this.signOutURL, { headers: headers });
  }
}

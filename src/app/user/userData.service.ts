import { Injectable } from '@angular/core';

/**
 * Service der alle Daten zum aktuellen User bereithält
 */
@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  /**
   * ID des Users
   */
  id!: any;
  /**
   * Email des Users
   */
  eMail!: any;
  /**
   * Nachname des Users
   */
  name!: any;
  /**
   * Vorname des Users
   */
  first_name!: any;
  /**
   * ID für die Rolle des Users
   */
  role_id!: any;
  /**
   * Token für autorisierte Abfragen im Backend. Nötig um Informationen zu bekommen
   */
  token!: any;

  constructor() {}

  /**
   * Setter für Userdaten
   * @param id ID des Users
   * @param eMail Email des Users
   * @param name Nachname des Users
   * @param first_name Vorname des Users
   * @param role_id ID der Rolle des Users
   */
  setUserData(
    id: any,
    eMail: any,
    name: any,
    first_name: any,
    role_id: any
  ): void {
    this.id = id;
    this.eMail = eMail;
    this.name = name;
    this.first_name = first_name;
    this.role_id = role_id;
  }

  /**
   * Fügt den Vor- und Nachname des Users zu einem String zusammen
   * @returns {string} Vorname + Nachname
   */
  getAuthor(): string {
    return this.first_name + ' ' + this.name;
  }

  /**
   * Getter für die Rollen ID des Users
   * @returns {number} RollenID Nummer
   */
  getRole(): number {
    return this.role_id;
  }

  /**
   * Getter für die Email des Users
   * @returns {string} Email des Users
   */
  getEmail(): string {
    return this.eMail;
  }

  /**
   * Getter für den Token des Users
   * @returns {any} Token des Users
   */
  getToken(): any {
    return this.token;
  }

  /**
   * Setter für den Token des Users
   * @param token Token vom Backend zugesendet
   */
  setToken(token: any): any {
    this.token = token;
  }
}

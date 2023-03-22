/**
 * Hält die Informationen die für ein Modul notwendig sind.
 */
export class Modul {
  /**
   * ID des Moduls
   */
  id: number;
  /**
   * Name des Moduls
   */
  name: String;

  /**
   * Erstellt ein neues Modul
   * @param id ID des Moduls
   * @param name Name des Moduls
   */
  constructor(id: number, name: String) {
    this.id = id;
    this.name = name;
  }
}

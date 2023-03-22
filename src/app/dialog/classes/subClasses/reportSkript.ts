import { Report } from '../Report';

/**
 * Klasse die Reports um die Subklasse ReportSkript erweitert
 */
export class ReportSkript extends Report {
  /**
   * Seitennummer wo sich der Fehler befindet
   */
  page?: Number;
  /**
   * Nummer des Kapitels in dem sich der Fehler befindet
   */
  chapter?: Number;
  /**
   * Nummer der Abblildung in der sich der Fehler befindet
   */
  illustrationNumber?: Number;
  /**
   * Nummer der Tabeller in der sich der Fehler befindet
   */
  tableNumber?: Number;

  /**
   * Erstellt ein neues ReportSkirpt Objekt.
   * @param type Typ der Meldung
   * @param modul Modul der Meldung
   * @param description Beschreibung der Meldung
   * @param pageNumber Seitennummer des Skriptfehlers
   * @param chapter Kapitel des Skriptfehlers
   * @param illustrationNumber Nummer der Abbildung
   * @param tableNumber Nummer der Tabelle
   * @param id ID der Meldung
   * @param status aktuller Status der Meldung
   * @param priority Priorität der Meldung
   * @param author Author der Meldung
   * @param eMail Email des Authors
   * @param reportDate Datum der Meldungserstellung
   * @param grantedDate Datum der Bearbeitungsfreigabe
   * @param completedDate Datum des Abschlusses
   */
  constructor(
    type: string,
    modul: String,
    description?: String,
    pageNumber?: Number,
    chapter?: Number,
    illustrationNumber?: Number,
    tableNumber?: Number,
    id?: number,
    status?: String,
    priority?: Number,
    author?: String,
    eMail?: String,
    reportDate?: number,
    grantedDate?: number,
    completedDate?: number
  ) {
    super(
      type,
      modul,
      description,
      id,
      status,
      priority,
      author,
      eMail,
      reportDate,
      grantedDate,
      completedDate
    );

    this.page = pageNumber;
    this.chapter = chapter;
    this.illustrationNumber = illustrationNumber; //wenn keine Abbildung angeben ist, wird hier eine 0 eingefügt
    this.tableNumber = tableNumber; //wenn keine Tabelle angegeben ist, wird hier eine 0 eingefügt
  }

  /**
   * 1 -> Skript 2 -> Video Kennzahl der Art der Meldung.
   * @returns 1 Kennzahl für Skript.
   */
  getType(): number {
    return 1;
  }
}

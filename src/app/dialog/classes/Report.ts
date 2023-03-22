/**
 * Klasse die alle Attribute die sich die Meldungen teilen zusammenfasst
 */
export abstract class Report {
  /**
   * ID zum Unterscheiden der Objekte
   */
  id?: number;
  /**
   * Aktueller Status der Meldung (NEU|IN BEARBEITUNG|ABGESCHLOSSEN)
   */
  status?: String;
  /**
   * Angabe zum Typ der Meldung (Fehler|Verbesserungsvorschlag|Inhaltsergänzung)
   */
  reportType?: string;
  /**
   * Priorität der Meldung(1 = niedrig|2 = mittel|3 = hoch)
   */
  priority?: Number = 2;
  /**
   * Angabe zum Modul
   */
  module?: String;
  /**
   * ID für des Modul
   */
  university_module_id?: number;
  /**
   * Ersteller der Meldung
   */
  author?: String;
  /**
   * Email des Erstellers
   */
  eMail?: String;
  /**
   * Datum in Millisekunden an dem der Fehler erstellt wurde
   */
  report_date?: number;
  /**
   * Datum in Millisekunden an dem der Fehler zu Bearbeitung freigegeben wurde
   */
  granted_date?: number;
  /**
   * Datum in Millisekunden an dem die Fehlerbehebung abgeschlossen und abgelehnt wurde
   */
  completed_date?: number;
  /**
   * Beschreibung zum Fehler
   */
  description?: String;

  /**
   * Constructor zum erstellen einer Reportklasse.
   * @param type Typ der Fehlermeldung
   * @param modul Modul des Fehlers
   * @param description Beschreibung des Fehlers
   * @param id ID des Fehlers
   * @param status aktueller Status der Meldung
   * @param priority Priorität der Meldung
   * @param author Author der Meldung
   * @param eMail Email des Authors
   * @param reportDate Datum der Meldung
   * @param grantedDate Datum der Bearbeitungsfreigabe
   * @param completedDate Datum des Abschlusses
   */
  constructor(
    type: string,
    modul: String,
    description?: String,
    id?: number,
    status?: String,
    priority?: Number,
    author?: String,
    eMail?: String,
    reportDate?: number,
    grantedDate?: number,
    completedDate?: number
  ) {
    this.reportType = type;
    this.module = modul;
    this.description = description;

    //Wenn der String Status leer ist wird der If block aktiv und ein neues Objekt kann generiert werden
    if (!status) {
      this.status = 'neu';
      this.priority = 2;
      this.report_date = new Date().getTime();
    }

    //Baut das fertig Objekt vom Backend zusammen
    else {
      this.id = id;
      this.status = status;
      this.priority = priority;
      this.author = author;
      this.eMail = eMail;
      this.report_date = reportDate;
      this.granted_date = grantedDate;
      this.completed_date = completedDate;
    }
  }

  /**
   * Rechnet Millisekungen in ein Datum um.
   * @param time Zeit in Millisekunden
   * @returns Das zu berechnende Datum
   */
  calcDateAndTime(time: any): string {
    var date = new Date(time);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  }

  /**
   * Setzt den Vornamen und Nachnamen des Author zusamen und fügt ihm und die Email in das Objekts.
   * @param name Nachname des Authors
   * @param first_name Vorname des Authors
   * @param email Email des Authors
   */
  setUser(name: string, first_name: string, email: string): void {
    this.author = first_name + ' ' + name;
    this.eMail = email;
  }

  /**
   * Setzt das ID Nummer des Objekts.
   * @param id Id des Moduls
   */
  setModulId(id: number) {
    this.university_module_id = id;
  }
}

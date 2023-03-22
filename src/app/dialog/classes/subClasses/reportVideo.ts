import { Report } from '../Report';

/**
 * Erweitert Reports um die Subklasse ReportVideo
 */
export class ReportVideo extends Report {
  /**
   * Titel des Videos
   */
  videoTitle?: String;
  /**
   * Zeitstempel in Sekunden
   */
  timestampStart?: number;
  /**
   * Zeitstempel in Sekunden
   */
  timestampEnd?: number;
  /**
   * URL des Videos
   */
  videoURL?: String;

  /**
   * Erstellt ein neues Videoobjekt
   * @param type Typ der Fehlermeldung
   * @param modul Modul der Fehlermeldung
   * @param description Beschreibung der Fehlermeldung
   * @param title Titel des Videos
   * @param timestampStart Zeitstempel Start des Fehlers
   * @param timestampEnd Zeitstempel Beginn des Fehlers
   * @param videoUrl URL des Videos
   * @param id ID der Meldung
   * @param status Status der Meldung
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
    title?: String,
    timestampStart?: number,
    timestampEnd?: number,
    videoUrl?: String,
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

    this.videoTitle = title;
    this.timestampStart = timestampStart;
    this.timestampEnd = timestampEnd;
    this.videoURL = videoUrl;
  }

  /**
   * 1 -> Skript 2 -> Video Kennzahl der Art der Meldung
   * @returns 2 für das Unterscheiden der Meldungsarten
   */
  getType(): number {
    return 2;
  }

  /**
   * Wandelt einen Zeitstempel von Sekunden in ein "xx:xx" Format um.
   * @param time Zeit in Sekunden
   * @returns Zeit in "mm:ss"
   */
  calcTimeToString(time: any): String {
    var timeC = new Date(time * 1000);

    var minutes = timeC.getUTCMinutes();
    var seconds = timeC.getUTCSeconds();

    return (
      minutes.toString().padStart(2, '0') +
      ':' +
      seconds.toString().padStart(2, '0')
    );
  }
}

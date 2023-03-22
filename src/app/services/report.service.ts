import { VideoPriority } from './patch/videoPriority';
import { SkirptStatus } from './patch/skriptStatus';
import { SkirptPriority } from './patch/skriptPriority';
import { UserDataService } from './../user/userData.service';
import { ReportResponse } from './../interfaces/ReportResponse';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { VideoStatus } from './patch/videoStatus';

/**
 * Service zum Abgreifen von den Meldungen im Backend
 * @todo URLs sollen in einem Enum gespeichert werden
 */
@Injectable({
  providedIn: 'root',
})
export class ReportService {
  errorReportUrl: string =
    'https://fathomless-eyrie-95662.herokuapp.com/api/v1/error_reports';
  skriptReportUrl: string =
    'https://fathomless-eyrie-95662.herokuapp.com/api/v1/skript_reports';
  videoReportUrl: string =
    'https://fathomless-eyrie-95662.herokuapp.com/api/v1/video_reports';

  /**
   * Funktion ist Auslöser für die Verbindung zum Backend und holt mit einer GET Methode alle offenen Meldungen
   * @returns Alle offenen Meldungen
   */
  fetchReports(): Observable<ReportResponse[]> {
    let headers = new HttpHeaders().set('Authorization', this.userData.token);
    return this.http.get<ReportResponse[]>(this.errorReportUrl, {
      headers: headers,
    });
  }

  /**
   * Funktion ist Auslöser für die Verbindung zum Backend und holt mit einer GET Methode alle abgeschlossenen Meldungen
   * @returns Alle abgeschlossenen Meldungen
   */
  fetchClosedReports(): Observable<ReportResponse[]> {
    let headers = new HttpHeaders().set('Authorization', this.userData.token);

    return this.http.get<ReportResponse[]>(
      this.errorReportUrl + '?status=abgeschlossen',
      {
        headers: headers,
      }
    );
  }

  /**
   * Injeziert div. Services
   * @param http Für den Aufbau einer Verbindung mit dem Backend
   * @param userData Enthält alle Informationen zum User
   */
  constructor(private http: HttpClient, private userData: UserDataService) {}

  /**
   * Verändert den aktuellen Status eines SkriptReports und speichert ihn im Backend
   * @param id ID der Meldung
   * @param newStatus Status der neu gesetzt werden soll
   * @param granted_date Datum an dem der Status auf "in Bearbeitung" gesetzt wurde
   * @param completed_date Datum an dem der Status auf "abgeschlossen" gesetzt wurde
   * @returns Observable mit Antwort des Servers
   */
  changeSkriptStaus(
    id: any,
    newStatus: any,
    granted_date: any,
    completed_date: any
  ) {
    const url = this.skriptReportUrl + '/' + id;
    let patchObj: SkirptStatus = {
      skript_report: {
        status: newStatus,
        granted_date: granted_date,
        completed_date: completed_date,
      },
    };
    let headers = new HttpHeaders().set('Authorization', this.userData.token);

    return this.http.patch(url, patchObj, { headers: headers });
  }

  /**
   * Verändert die aktuelle Priorität des SkriptReports und speichert sie im Backend
   * @param id ID der Meldung
   * @param newPriority Neue Priorität der Meldung
   * @returns Observable mit Antwort des Backends
   */
  changeSkriptPriority(id: any, newPriority: any) {
    const url = this.skriptReportUrl + '/' + id;
    let patchObj: SkirptPriority = {
      skript_report: {
        priority: newPriority,
      },
    };
    let headers = new HttpHeaders().set('Authorization', this.userData.token);

    return this.http.patch(url, patchObj, { headers: headers });
  }

  /**
   * Verändert den aktuellen Status eines VideoReports und speichert ihn im Backend
   * @param id ID der Meldung
   * @param newStatus Status der neu gesetzt werden soll
   * @param granted_date Datum an dem der Status auf "in Bearbeitung" gesetzt wurde
   * @param completed_date Datum an dem der Status auf "abgeschlossen" gesetzt wurde
   * @returns {Observable} mit Antwort des Servers
   */
  changeVideoStatus(
    id: any,
    newStatus: any,
    granted_date: any,
    completed_date: any
  ) {
    const url = this.videoReportUrl + '/' + id;
    let patchObj: VideoStatus = {
      video_report: {
        status: newStatus,
        granted_date: granted_date,
        completed_date: completed_date,
      },
    };
    let headers = new HttpHeaders().set('Authorization', this.userData.token);

    return this.http.patch(url, patchObj, { headers: headers });
  }

  /**
   * Verändert die aktuelle Priorität des VideoReports und speichert sie im Backend
   * @param id ID der Meldung
   * @param newPriority Neue Priorität der Meldung
   * @returns {Observable} mit Antwort des Backends
   */
  changeVideoPriority(id: any, newPriority: any) {
    const url = this.videoReportUrl + '/' + id;
    let patchObj: VideoPriority = {
      video_report: {
        priority: newPriority,
      },
    };
    let headers = new HttpHeaders().set('Authorization', this.userData.token);

    return this.http.patch(url, patchObj, { headers: headers });
  }

  /**
   * Löscht dauerhaft und unwiederruflich die Skirptmeldung
   * @param id ID der zu löschenden Meldung
   * @returns {Observable} mit Antwort des Backends
   */
  deleteSkript(id: any) {
    const url = this.skriptReportUrl + '/' + id;
    let headers = new HttpHeaders().set('Authorization', this.userData.token);
    return this.http.delete(url, { headers: headers });
  }

  /**
   * Löscht dauerhaft und unwiederruflich die Videomeldung
   * @param id ID der zu löschenden Meldung
   * @returns {Observable} mit Antwort des Backends
   */
  deleteVideo(id: any) {
    const url = this.videoReportUrl + '/' + id;
    let headers = new HttpHeaders().set('Authorization', this.userData.token);
    return this.http.delete(url, { headers: headers });
  }
}

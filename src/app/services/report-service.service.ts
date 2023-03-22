import { VideoContainer } from './../interfaces/videoContainer';
import { VideoPost } from './../interfaces/videoPost';
import { SkriptContainer } from './../interfaces/skriptContainer';
import { SkriptPost } from './../interfaces/skriptPost';
import { UserDataService } from './../user/userData.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReportSkript } from './../dialog/classes/subClasses/reportSkript';
import { ReportVideo } from './../dialog/classes/subClasses/reportVideo';

/**
 * Service für das speichern von Skript und Video Reports zuständig. URL zum Backend auch enthalten
 * @todo Refactor Servicename
 * @todo URL sollen in einem Enum gespeichert werden
 */
@Injectable({
  providedIn: 'root',
})
export class ReportServiceService {
  errorReportUrl: string =
    'https://fathomless-eyrie-95662.herokuapp.com/api/v1/error_reports';
  skriptReportUrl: string =
    'https://fathomless-eyrie-95662.herokuapp.com/api/v1/skript_reports';
  videoReportUrl: string =
    'https://fathomless-eyrie-95662.herokuapp.com/api/v1/video_reports';

  /**
   * Skirpt wird zur Datenbank gesendet und gespeichert
   * @param report Die zu speichernde Skriptmeldung
   * @returns Observable mit Antwort vom Backend
   */
  addSkript(report: ReportSkript): Observable<any> {
    let skript = new SkriptPost(
      report.reportType,
      report.module,
      report.description,
      report.status,
      report.priority,
      report.page,
      report.chapter,
      report.illustrationNumber,
      report.tableNumber,
      report.report_date,
      this.userData.id,
      this.userData.getAuthor(),
      this.userData.eMail,
      report.university_module_id
    );
    let skriptCont = new SkriptContainer(skript);

    let token = this.userData.token;

    let headers = new HttpHeaders().set('Authorization', token);
    console.log('Skriptreport sent to backend!');
    return this.http.post<any>(this.skriptReportUrl, skriptCont, {
      responseType: 'json',
      headers: headers,
    });
  }

  /**
   * Videomeldung wird zur Datenbank gesendet und gespeichert
   * @param report Die zu speichernde Videomeldung
   * @returns Observable mit Antwort vom Backend
   */
  addVideo(report: ReportVideo): Observable<any> {
    let video = new VideoPost(
      report.reportType,
      report.module,
      report.description,
      report.status,
      report.priority,
      report.videoTitle,
      report.timestampStart,
      report.timestampEnd,
      report.videoURL,
      report.report_date,
      this.userData.id,
      this.userData.getAuthor(),
      this.userData.eMail,
      report.university_module_id
    );
    let videoCont = new VideoContainer(video);

    let token = this.userData.token;

    let headers = new HttpHeaders().set('Authorization', token);
    console.log('Videoreport sent to backend!');
    return this.http.post<any>(this.videoReportUrl, videoCont, {
      responseType: 'json',
      headers: headers,
    });
  }

  /**
   * Injiziert div. Services
   * @param http Zum Aufbau einer Verbindung mit dem Backend
   * @param userData Enthält alle Informationen zum User
   */
  constructor(private http: HttpClient, private userData: UserDataService) {}
}

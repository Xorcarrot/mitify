import { SkriptContainer } from './interfaces/skriptContainer';
import { SkriptPost } from './interfaces/skriptPost';
import { UserDataService } from './user/userData.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { Report } from './dialog/classes/Report';
import { ReportSkript } from './dialog/classes/subClasses/reportSkript';
import { ReportVideo } from './dialog/classes/subClasses/reportVideo';

@Injectable({
  providedIn: 'root'
})
export class ReportServiceService {

  errorReportUrl: string = 'https://fathomless-eyrie-95662.herokuapp.com/api/v1/error_reports';
  skriptReportUrl: string = 'https://fathomless-eyrie-95662.herokuapp.com/api/v1/skript_reports';
  videoReportUrl: string = 'https://fathomless-eyrie-95662.herokuapp.com/api/v1/video_reports';

  //adds a new Skriptreport to the Database
  addSkript(report: ReportSkript): Observable<any> {
    let skript = new SkriptPost(report.reportType, report.module, report.description, report.status, report.priority, report.page, report.chapter, report.illustrationNumber, report.tableNumber, report.reportDate, this.userData.id);
    let skriptCont = new SkriptContainer(skript);

    let token = this.userData.token;

    console.log(skriptCont);
    let headers = new HttpHeaders().set('Authorization', token);
    console.log("Skriptreport sent to backend!");
    return this.http.post<any>(this.skriptReportUrl, skriptCont, {responseType: 'json',
                                                              headers: headers});
  }

  //adds a new Videoreport to the Database
  addVideo(report: ReportVideo): Observable<any> {
    let token = this.userData.token;
    let headers = new HttpHeaders().set('Authorization', token);
    console.log("Videoreport sent to backend!");
    return this.http.post<any>(this.videoReportUrl, report, {responseType: 'json',
                                                            headers: headers});
  }

  constructor(private http: HttpClient, private userData: UserDataService) { }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
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

  //adds a new Report to the Database
  addSkript(report: ReportSkript): Observable<any> {
    return this.http.post<any>(this.errorReportUrl, report);
  }


  constructor(private http: HttpClient) { }
}

import { ReportResponse } from './../../interfaces/ReportResponse';
import { ReportSkript } from '../../dialog/classes/subClasses/reportSkript';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Report } from 'src/app/dialog/classes/Report';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  errorReportUrl: string = 'https://fathomless-eyrie-95662.herokuapp.com/api/v1/error_reports';
  skriptReportUrl: string = 'https://fathomless-eyrie-95662.herokuapp.com/api/v1/skript_reports';
  videoReportUrl: string = 'https://fathomless-eyrie-95662.herokuapp.com/api/v1/video_reports';

  fetchReports(): Observable<ReportResponse[]> {
    return this.http.get<ReportResponse[]>(this.errorReportUrl);
  }

constructor(private http: HttpClient) { }

}
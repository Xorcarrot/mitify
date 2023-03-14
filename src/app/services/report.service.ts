import { VideoPriority } from './patch/videoPriority';
import { SkirptStatus } from './patch/skriptStatus';
import { SkirptPriority } from './patch/skriptPriority';
import { UserDataService } from './../user/userData.service';
import { ReportResponse } from './../interfaces/ReportResponse';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { VideoStatus } from './patch/videoStatus';

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

  fetchReports(): Observable<ReportResponse[]> {
    let headers = new HttpHeaders().set('Authorization', this.userData.token);
    return this.http.get<ReportResponse[]>(this.errorReportUrl, {
      headers: headers,
    });
  }

  fetchClosedReports(): Observable<ReportResponse[]> {
    let headers = new HttpHeaders().set('Authorization', this.userData.token);

    return this.http.get<ReportResponse[]>(this.errorReportUrl + '?status=closed', {
      headers: headers,
    });
  }

  constructor(private http: HttpClient, private userData: UserDataService) {}

  changeSkriptStaus(id: number, newStatus: string) {
    const url = this.skriptReportUrl + '/' + id;
    let patchObj!: SkirptStatus;
    patchObj.skript_report.status = newStatus;
    let headers = new HttpHeaders().set('Authorization', this.userData.token);

    this.http.patch(url, patchObj, {headers: headers});
  }

  changeSkriptPriority(id: number, newPriority: number) {
    const url = this.skriptReportUrl + '/' + id;
    let patchObj!: SkirptPriority;
    patchObj.skript_report.priority = newPriority;
    let headers = new HttpHeaders().set('Authorization', this.userData.token);

    this.http.patch(url, patchObj, {headers: headers});
  }

  changeVideoStatus(id: number, newStatus: string) {
    const url = this.videoReportUrl + '/' + id;
    let patchObj!: VideoStatus;
    patchObj.video_report.status = newStatus;
    let headers = new HttpHeaders().set('Authorization', this.userData.token);

    this.http.patch(url, patchObj, {headers: headers});
  }

  changeVideoPriority(id: number, newPriority: number) {
    const url = this.videoReportUrl + '/' + id;
    let patchObj!: VideoPriority;
    patchObj.video_report.priority = newPriority;
    let headers = new HttpHeaders().set('Authorization', this.userData.token);

    this.http.patch(url, patchObj, {headers: headers});
  }
}

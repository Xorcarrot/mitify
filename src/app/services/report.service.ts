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

    return this.http.get<ReportResponse[]>(this.errorReportUrl + '?status=abgeschlossen', {
      headers: headers,
    });
  }

  constructor(private http: HttpClient, private userData: UserDataService) {}

  changeSkriptStaus(id: any, newStatus: any) {
    const url = this.skriptReportUrl + '/' + id;
    let patchObj: SkirptStatus = {skript_report: {
      status: newStatus
    }};
    let headers = new HttpHeaders().set('Authorization', this.userData.token);

    return this.http.patch(url, patchObj, {headers: headers});
  }

  changeSkriptPriority(id: any, newPriority: any) {
    const url = this.skriptReportUrl + '/' + id;
    let patchObj: SkirptPriority = {skript_report: {
      priority: newPriority
    }};
    let headers = new HttpHeaders().set('Authorization', this.userData.token);

    return this.http.patch(url, patchObj, {headers: headers});
  }

  changeVideoStatus(id: any, newStatus: any) {
    const url = this.videoReportUrl + '/' + id;
    let patchObj: VideoStatus = {video_report: {
      status: newStatus
    }};
    let headers = new HttpHeaders().set('Authorization', this.userData.token);

    return this.http.patch(url, patchObj, {headers: headers});
  }

  changeVideoPriority(id: any, newPriority: any) {
    const url = this.videoReportUrl + '/' + id;
    let patchObj: VideoPriority = {video_report: {
      priority: newPriority
    }};
    let headers = new HttpHeaders().set('Authorization', this.userData.token);

    return this.http.patch(url, patchObj, {headers: headers});
  }

  deleteSkript(id:any) {
    const url = this.skriptReportUrl + '/' + id;
    let headers = new HttpHeaders().set('Authorization', this.userData.token);
    return this.http.delete(url, {headers: headers});
  }

  deleteVideo(id:any) {
    const url = this.videoReportUrl + '/' + id;
    let headers = new HttpHeaders().set('Authorization', this.userData.token);
    return this.http.delete(url, {headers: headers});
  }
}

import { ReportVideo } from './../dialog/classes/subClasses/reportVideo';
import { ReportResponse } from './../interfaces/ReportResponse';
import { ReportService } from './report.service';
import { DataSource } from '@angular/cdk/collections';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Report } from 'src/app/dialog/classes/Report';
import { ReportSkript } from 'src/app/dialog/classes/subClasses/reportSkript';

@Injectable({
  providedIn: 'root',
})
export class DatasourceService extends DataSource<ReportResponse> {
  reports$ = new BehaviorSubject<ReportResponse[]>([]);
  isLoading$ = new BehaviorSubject<boolean>(false);

  connect(): Observable<ReportResponse[]> {
    return this.reports$.asObservable();
  }

  disconnect(): void {
    this.reports$.complete();
  }

  loadReports(): void {
    this.isLoading$.next(true);
    this.reportService.fetchReports().subscribe((reports) => {
      this.reports$.next(reports);
      this.isLoading$.next(false);
    });
  }

  getReportArray(): Report[] {
    this.loadReports();
    const reports: Report[] = [];
    this.reports$.subscribe((data) => {
      data.forEach((re) => {
        if (re.error_report.page > 0) {
          reports.push(
            new ReportSkript(
              re.error_report.reportType,
              re.error_report.module,
              re.error_report.description,
              re.error_report.page,
              re.error_report.chapter,
              re.error_report.illustrationNumber,
              re.error_report.tableNumber,
              re.error_report.id,
              re.error_report.status,
              re.error_report.priority,
              re.error_report.author,
              re.error_report.eMail,
              re.error_report.report_date,
              re.error_report.granted_date,
              re.error_report.completed_date
            )
          );
        } else {
          reports.push(
            new ReportVideo(
              re.error_report.reportType,
              re.error_report.module,
              re.error_report.description,
              re.error_report.videoTitle,
              re.error_report.timestampStart,
              re.error_report.timestampEnd,
              re.error_report.videoURL,
              re.error_report.id,
              re.error_report.status,
              re.error_report.priority,
              re.error_report.author,
              re.error_report.eMail,
              re.error_report.report_date,
              re.error_report.granted_date,
              re.error_report.completed_date
            )
          );
        }
      });
    });
    return reports;
  }

  constructor(private reportService: ReportService) {
    super();
  }
}

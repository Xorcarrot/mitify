import { ReportResponse } from './../../interfaces/ReportResponse';
import { ReportService } from './report.service';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { Report } from 'src/app/dialog/classes/Report';
import { ReportSkript } from 'src/app/dialog/classes/subClasses/reportSkript';

@Injectable({
  providedIn: 'root'
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
    this.reportService.fetchReports().subscribe(reports => {
      this.reports$.next(reports);
      this.isLoading$.next(false);
    });
  }

  getReportArray():Report[] {
    this.loadReports();
    const reports: Report[] = [];
    this.reports$.subscribe(data => {
      data.forEach(re => {
        if (re.page > 0) {
          reports.push(new ReportSkript(re.reportType, re.module, re.description, re.page, re.chapter, re.illustrationNumber, re.tableNumber, 
            re.id, re.status, re.priority, re.author, re.eMail, re.reportDate, re.grantedDate, re.completedDate))
        }
      })
    });
    return reports;
  }

  constructor(private reportService: ReportService) { 
    super();
  }


}

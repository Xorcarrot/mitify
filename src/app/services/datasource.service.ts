import { ReportVideo } from './../dialog/classes/subClasses/reportVideo';
import { ReportResponse } from './../interfaces/ReportResponse';
import { ReportService } from './report.service';
import { DataSource } from '@angular/cdk/collections';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Report } from 'src/app/dialog/classes/Report';
import { ReportSkript } from 'src/app/dialog/classes/subClasses/reportSkript';

/**
 * Service der für den Zugriff und dem Laden der Daten aus dem Backend zuständig ist.
 *
 * @author Patrick Pusswald
 */
@Injectable({
  providedIn: 'root',
})
export class DatasourceService extends DataSource<ReportResponse> {
  /**
   * Array mit allen noch offenen Meldungen
   */
  reports$ = new BehaviorSubject<ReportResponse[]>([]);
  /**
   * Boolean der den aktuellen Zustand des Ladens der offenen Meldungen wiederspiegelt.
   */
  isLoading$ = new BehaviorSubject<boolean>(false);
  /**
   * Array mit allen abgeschlossenen Meldungen
   */
  reportsClosed$ = new BehaviorSubject<ReportResponse[]>([]);
  /**
   * Boolean der den aktuellen Zustand des Ladens der abgeschlossenen Meldungen wiederspiegelt.
   */
  isLoadingClosed$ = new BehaviorSubject<boolean>(false);

  /**
   * Funktion zum herstellen einer Verbindung mit dem Backend.
   *
   * @returns Array von ReportResponse aus dem Backend
   * @author Patrick Pußwald
   * @ignore Nicht dirket aufrufen
   */
  connect(): Observable<ReportResponse[]> {
    return this.reports$.asObservable();
  }

  /**
   * Funktion zum trennen der Verbindung mit dem Backend.
   *
   * @author Patrick Pußwald
   * @ignore Nicht dirket aufrufen
   */
  disconnect(): void {
    this.reports$.complete();
  }

  /**
   * Funktion die das Abgreifen der offenen Meldungen vom Backend startet.
   *
   * @author Patrick Pußwald
   * @ignore Nicht dirket aufrufen
   */
  loadReports(): void {
    this.isLoading$.next(true);
    this.reportService.fetchReports().subscribe((reports) => {
      this.reports$.next(reports);
      this.isLoading$.next(false);
    });
  }

  /**
   * Funktion die den heruntergeladenen Report Array mit offenen Meldungen zurückgibt.
   *
   * @returns Array von offenen Reports
   * @author Patrick Pußwald
   */
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

  /**
   * Funktion die das Abgreifen der offenen Meldungen vom Backend startet.
   *
   * @author Patrick Pußwald
   * @ignore Nicht dirket aufrufen
   */
  loadClosedReports(): void {
    this.isLoadingClosed$.next(true);
    this.reportService.fetchClosedReports().subscribe((reports) => {
      this.reportsClosed$.next(reports);
      this.isLoadingClosed$.next(false);
    });
  }

  /**
   * Funktion die den heruntergeladenen Report Array mit abgeschlossenen Meldungen zurückgibt.
   *
   * @returns Array von abgeschlossenen Reports
   * @author Patrick Pußwald
   */
  getClosedReportArray(): Report[] {
    this.loadClosedReports();
    const reports: Report[] = [];
    this.reportsClosed$.subscribe((data) => {
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

  /**
   * Injeziert den ReportService um eine Verbindung mit dem Backend zu erstellen.
   *
   * @param reportService Service der alle Daten beinhaltet zum erstellen einer Verbindung mit dem Backend.
   */
  constructor(private reportService: ReportService) {
    super();
  }
}

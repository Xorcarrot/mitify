import { Report } from 'src/app/dialog/classes/Report';
import { MatPaginator } from '@angular/material/paginator';
import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { ReportResponse } from 'src/app/interfaces/ReportResponse';
import { DatasourceService } from 'src/app/services/datasource.service';
import { ReportService } from 'src/app/services/report.service';

/**
 * Componente die die Tabelle für abgeschlossene Meldungen bereitstellt.
 * @author Patrick Pußwald
 */
@Component({
  selector: 'app-module-manager-table-closed',
  templateUrl: './module-manager-table-closed.component.html',
  styleUrls: ['./module-manager-table-closed.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class ModuleManagerTableClosedComponent
  implements AfterViewInit, OnInit
{
  /**
   * Informationen für die Tabelle vom Backend
   */
  report = new DatasourceService(this.reportService);
  /**
   * Alle Reports für die Tabelle
   */
  reports!: ReportResponse[];
  /**
   * Spalten für die Tabelle
   */
  displayedColumns: string[] = [
    'id',
    'reportType',
    'status',
    'priority',
    'module',
  ];
  /**
   * Datenquelle zum Erstellen der Tabelle
   */
  dataSource = new MatTableDataSource(this.reports);
  /**
   * Information welche Spalte ausgeklappt ist
   */
  displayedColumnsWithExpand = [...this.displayedColumns, 'expand'];
  /**
   * Inforamtionen zum ausgeklappten Element
   */
  expandedElement!: Report | null;
  /**
   * Boolean ob die abgeschlossenen Meldungen geladen werden sollen
   */
  loadClosedReports: boolean = false;

  /**
   * Sortierfunktion
   */
  @ViewChild(MatSort, { static: false }) set sort(value: MatSort) {
    if (this.dataSource) {
      this.dataSource.sort = value;
    }
  }
  /**
   * Paginator
   */
  @ViewChild(MatPaginator, { static: false }) set paginator(
    value: MatPaginator
  ) {
    if (this.dataSource) {
      this.dataSource.paginator = value;
    }
  }
  /**
   * Fügt der Tabelle die Sortier und Paginator Funktion hinzu
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /**
   * Lädt alle Daten vom Backend und erstellt danach die Tabelle
   */
  ngOnInit(): void {
    this.report.loadClosedReports();
    this.report.reportsClosed$.subscribe((data) => {
      this.reports = data;
      this.dataSource = new MatTableDataSource<ReportResponse>(this.reports);
    });
  }

  /**
   * Iniziert div. Service
   * @param _liveAnnouncer Gibt Information über die Sortierung weiter
   * @param reportService Service zum laden der Daten vom Backend
   */
  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private reportService: ReportService
  ) {}

  /**
   * Funktion zum erstellen der sortierten Tabelle
   * @param sortState Angewanter Filter
   */
  announceSortChange(sortState: Sort) {
    this.expandedElement = null;
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  /**
   * Übersetzt die Prioritätsnummer in einen String
   * @param prio Nummer der Priorität
   * @returns {string} String zur Priorität oder ERROR
   */
  priorityString(prio: number): string {
    switch (prio) {
      case 1: {
        return 'hoch';
      }
      case 2: {
        return 'normal';
      }
      case 3: {
        return 'niedrig';
      }
    }
    return 'ERROR';
  }

  /**
   * wendet den Filter auf die Tabelle an
   * @param event Event das über den Input eingegeben wird
   */
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  /**
   * Erstellt die Tabelle
   */
  loadClosedReportsDB() {
    this.loadClosedReports = true;
  }

  /**
   * Übersetzt die Modulid in einen lesbaren Namen.
   * @param moduleId ID des Moduls
   * @returns {string} Name des Moduls
   * @todo Muss ins Backend verlagert werden
   */
  getModule(moduleId: number): any {
    switch (moduleId) {
      case 1:
        return 'Big Data';
      case 2:
        return 'Mathematik Grundlagen';
    }
  }
}

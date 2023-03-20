import { REPORTS } from '../../../assets/REPORTS';
import { Report } from 'src/app/dialog/classes/Report';
import { MatPaginator } from '@angular/material/paginator';
import {
  AfterViewInit,
  Component,
  ViewChild,
  OnInit,
} from '@angular/core';
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
import { UserDataService } from 'src/app/user/userData.service';

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
  report = new DatasourceService(this.reportService);
  reports!: ReportResponse[];

  displayedColumns: string[] = [
    'id',
    'reportType',
    'status',
    'priority',
    'module',
  ];
  dataSource = new MatTableDataSource(this.reports);
  displayedColumnsWithExpand = [...this.displayedColumns, 'expand'];
  expandedElement!: Report | null;

  loadClosedReports: boolean = false;

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {

  }

  ngOnInit(): void {
    this.report.loadClosedReports();
    this.report.reportsClosed$.subscribe((data) => {
      this.reports = data;
      this.dataSource = new MatTableDataSource<ReportResponse>(this.reports);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private reportService: ReportService
  ) {}

  announceSortChange(sortState: Sort) {
    this.expandedElement = null;
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  loadClosedReportsDB() {
    this.loadClosedReports = true;
  }

  getModule(moduleId: number): any {
    switch (moduleId) {
      case 1:
        return 'Big Data';
      case 2: 
        return 'Mathematik Grundlagen';
    } 
  }
}

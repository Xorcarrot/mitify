import { REPORTS } from './../../assets/REPORTS';
import { Report } from 'src/app/dialog/classes/Report';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class StudentTableComponent implements AfterViewInit {

  reports: Report[] = new REPORTS().getReports();

   displayedColumns: string[] = ['id', 'reportType', 'status', 'priority', 'module'];
   dataSource = new MatTableDataSource(this.reports);
   displayedColumnsWithExpand = [...this.displayedColumns, 'expand'];
   expandedElement!: Report | null;

   @ViewChild(MatSort) sort!: MatSort;

   ngAfterViewInit() {
    this.dataSource.sort = this.sort;
   }

  constructor(private _liveAnnouncer: LiveAnnouncer) {
  
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  priorityString(prio: number): string {
    switch(prio) {
      case 1: {
        return 'hoch';
      }
      case 2: {
        return 'normal';
      }
      case 3: {
        return 'nieder';
      }
    }
    return 'ERROR';
  }

}

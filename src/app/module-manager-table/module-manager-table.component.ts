import { REPORTS } from './../../assets/REPORTS';
import { Report } from 'src/app/dialog/classes/Report';
import {MatPaginator} from '@angular/material/paginator';
import { AfterViewInit, Component, ViewChild, Input, OnInit } from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-module-manager-table',
  templateUrl: './module-manager-table.component.html',
  styleUrls: ['./module-manager-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ModuleManagerTableComponent implements AfterViewInit, OnInit {

  reports: Report[] = new REPORTS().getReports();

   displayedColumns: string[] = ['id', 'reportType', 'status', 'priority', 'module'];
   dataSource = new MatTableDataSource(this.reports);
   displayedColumnsWithExpand = [...this.displayedColumns, 'expand'];
   expandedElement!: Report | null;

   @ViewChild(MatSort) sort!: MatSort;
   @ViewChild(MatPaginator) paginator!: MatPaginator;

   ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
   }

   ngOnInit(): void {
     
   }

  constructor(private _liveAnnouncer: LiveAnnouncer) {
  
  }

  announceSortChange(sortState: Sort) {
    this.expandedElement = null;
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
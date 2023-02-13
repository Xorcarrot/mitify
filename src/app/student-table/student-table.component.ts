import { REPORTS } from './../../assets/REPORTS';
import { Report } from 'src/app/dialog/classes/Report';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {LiveAnnouncer} from '@angular/cdk/a11y';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent implements AfterViewInit {

  reports: Report[] = new REPORTS().getReports();

   displayedColumns: string[] = ['id', 'reportType', 'status', 'priority', 'module'];
   dataSource = new MatTableDataSource(this.reports);

   @ViewChild(MatSort) sort!: MatSort;

   ngAfterViewInit() {
    this.dataSource.sort = this.sort;
   }

  constructor(private _liveAnnouncer: LiveAnnouncer) {
  
  }

  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}

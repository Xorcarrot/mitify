import { REPORTS } from './../../assets/REPORTS';
import { Report } from 'src/app/dialog/classes/Report';
import { Component } from '@angular/core';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent {

  reports: Report[] = new REPORTS().getReports();

  constructor() {
  
  }

}

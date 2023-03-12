import { Component } from '@angular/core';

@Component({
  selector: 'app-student-container',
  templateUrl: './student-container.component.html',
  styleUrls: ['./student-container.component.css'],
})
export class StudentContainerComponent {
  openReports: number = 1;
  closedReports: number = 2;

  constructor() {}

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-container',
  templateUrl: './student-container.component.html',
  styleUrls: ['./student-container.component.css']
})
export class StudentContainerComponent implements OnInit {

  openReports: number = 1;
  closedReports: number = 2;

  constructor() {
    
  }

  ngOnInit(): void {
    
  }

}

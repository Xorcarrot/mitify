import { Component } from '@angular/core';

/**
 * Container der die Tabellen des Studenten hält
 */
@Component({
  selector: 'app-student-container',
  templateUrl: './student-container.component.html',
  styleUrls: ['./student-container.component.css'],
})
export class StudentContainerComponent {
  /**
   * Kennnummer für offene Meldungen
   */
  openReports: number = 1;
  /**
   * Kennnummer für geschlossene Meldungen
   */
  closedReports: number = 2;

  constructor() {}
}

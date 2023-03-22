import { ReportSkript } from '../../dialog/classes/subClasses/reportSkript';
import { Component, Input } from '@angular/core';

/**
 * Detailansicht für Skripte wenn von einem Studenten geöffnet
 */
@Component({
  selector: 'app-skript-detail-student',
  templateUrl: './skript-detail-student.component.html',
  styleUrls: ['./skript-detail-student.component.css'],
})
export class SkriptDetailStudentComponent {
  @Input() report!: ReportSkript;

  /**
   * Rechnet die Zeit in Millisekunden in ein Datum um
   * @param time Zeit in Millisekunden
   * @returns {string} Datum mit Zeit
   */
  calcDateAndTime(time: any): string {
    var date = new Date(time);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  }
}

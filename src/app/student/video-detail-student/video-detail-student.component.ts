import { ReportVideo } from '../../dialog/classes/subClasses/reportVideo';
import { Component, Input } from '@angular/core';

/**
 * Detailansicht für Skripte wenn von einem Studenten geöffnet
 */
@Component({
  selector: 'app-video-detail-student',
  templateUrl: './video-detail-student.component.html',
  styleUrls: ['./video-detail-student.component.css'],
})
export class VideoDetailStudentComponent {
  @Input() report!: ReportVideo;

  /**
   * Rechnet die Zeit in Millisekunden in ein Datum um
   * @param time Zeit in Millisekunden
   * @returns {string} Datum mit Zeit
   */
  calcDateAndTime(time: any): string {
    var date = new Date(time);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  }

  /**
   * Rechnet die Zeitstempel eines Videos in das Format "mm:ss" um
   * @param time Zeit in Sekunden
   * @returns Zeit im Format "mm:ss"
   */
  calcTimeToString(time: any): String {
    var timeC = new Date(time * 1000);

    var minutes = timeC.getUTCMinutes();
    var seconds = timeC.getUTCSeconds();

    return (
      minutes.toString().padStart(2, '0') +
      ':' +
      seconds.toString().padStart(2, '0')
    );
  }
}

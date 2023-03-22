import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ReportService } from 'src/app/services/report.service';
import { ReportVideo } from '../../dialog/classes/subClasses/reportVideo';

/**
 * Component das alle Detailinformationen einer Meldung bereitstellt
 */
@Component({
  selector: 'app-video-detail-manager',
  templateUrl: './video-detail-manager.component.html',
  styleUrls: ['./video-detail-manager.component.css'],
})
export class VideoDetailManagerComponent {
  /**
   * Übernimmt die Meldung von der Tabelle
   */
  @Input() report!: ReportVideo;
  /**
   * Boolean für die Möglichkeit zum bearbeiten der Meldung
   */
  @Input() editingMode!: boolean;

  /**
   * Rechnet die Zeit von Millisekunden in ein Datum um
   * @param time Zeit in Millisekunden
   * @returns {string} String des Datums
   */
  calcDateAndTime(time: any): string {
    var date = new Date(time);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  }

  /**
   * Wandelt die Zeit in Sekunden in das Format "mm:ss" um
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

  /**
   * Funktion die dem Backend sagt das sich die Priorität nach oben geändert hat
   * @param id ID der Meldung
   * @param priority Aktulle Priorität
   */
  changePriorityUp(id: any, priority: any) {
    if (priority > 1) {
      priority = priority - 1;
      this.reportService.changeVideoPriority(id, priority).subscribe(() => {
        this.router
          .navigateByUrl('/', { skipLocationChange: true })
          .then(() => {
            this.router.navigate(['/', 'manager']);
          });
      });
    }
  }

  /**
   * Funktion die dem Backend sagt das sich die Priorität nach unten geändert hat
   * @param id ID der Meldung
   * @param priority Aktulle Priorität
   */
  changePriorityDown(id: any, priority: any) {
    if (priority < 3) {
      priority = priority + 1;
      this.reportService.changeVideoPriority(id, priority).subscribe(() => {
        this.router
          .navigateByUrl('/', { skipLocationChange: true })
          .then(() => {
            this.router.navigate(['/', 'manager']);
          });
      });
    }
  }

  /**
   * Funktioon die dem Backend sagt das der Status zu "in Bearbeitung" geschalten wird.
   * @param id ID der Meldung
   */
  statusInProgress(id: any) {
    var time = new Date().getTime();
    this.reportService
      .changeVideoStatus(id, 'in Bearbeitung', time, 0)
      .subscribe(() => {
        this.router
          .navigateByUrl('/', { skipLocationChange: true })
          .then(() => {
            this.router.navigate(['/', 'manager']);
          });
      });
  }

  /**
   * Funktioon die dem Backend sagt das der Status zu "abgeschlossen" geschalten wird.
   * @param id ID der Meldung
   * @param date Aktuelles Datum
   */
  statusDone(id: any, date: any) {
    var time = new Date().getTime();
    this.reportService
      .changeVideoStatus(id, 'abgeschlossen', date, time)
      .subscribe(() => {
        this.router
          .navigateByUrl('/', { skipLocationChange: true })
          .then(() => {
            this.router.navigate(['/', 'manager']);
          });
      });
  }

  /**
   * Funktion die die Meldung dauerhaft und unwiederbringlich löscht
   * @param id ID der Meldung
   */
  delete(id: any) {
    this.reportService.deleteVideo(id).subscribe(() => {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/', 'manager']);
      });
    });
  }

  /**
   * Injeziert div. Service
   * @param reportService Für die Kommunikation mit dem Backend
   * @param router Für das Navigieren in der Webanwendung
   */
  constructor(private reportService: ReportService, private router: Router) {}
}

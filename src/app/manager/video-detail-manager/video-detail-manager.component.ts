import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ReportService } from 'src/app/services/report.service';
import { ReportVideo } from '../../dialog/classes/subClasses/reportVideo';

@Component({
  selector: 'app-video-detail-manager',
  templateUrl: './video-detail-manager.component.html',
  styleUrls: ['./video-detail-manager.component.css'],
})
export class VideoDetailManagerComponent {
  @Input() report!: ReportVideo;
  @Input() editingMode!: boolean;

  calcDateAndTime(time: any): string {
    var date = new Date(time);
    return date.toLocaleDateString() + " " + date.toLocaleTimeString();
  }

  calcTimeToString(time: any): String {
    var timeC = new Date(time * 1000);

    var minutes = timeC.getUTCMinutes();
    var seconds = timeC.getUTCSeconds();

    return minutes.toString().padStart(2, '0') + ":" + seconds.toString().padStart(2, '0');
  }

  changePriorityUp(id: any, priority: any) {
    if(priority > 1) {
      priority = priority - 1;
      this.reportService.changeVideoPriority(id, priority).subscribe(() => {
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/', 'manager']);
        }) 
      });
    }
  }

  changePriorityDown(id: any, priority: any) {
    if(priority < 3) {
      priority = priority + 1;
      this.reportService.changeVideoPriority(id, priority).subscribe(() => {
        this.router.navigateByUrl('/', { skipLocationChange: true}).then(() => {
          this.router.navigate(['/', 'manager']);
        })
      });
    }
  }

  statusInProgress(id:any) {
    var time = new Date().getTime();
    this.reportService.changeVideoStatus(id, 'in Bearbeitung', time, 0).subscribe(() => {
      this.router.navigateByUrl('/', { skipLocationChange: true}).then(() => {
        this.router.navigate(['/', 'manager']);
      })
    })
  }

  statusDone(id:any, date:any) {
    var time = new Date().getTime();
    this.reportService.changeVideoStatus(id, 'abgeschlossen', date, time).subscribe(() => {
      this.router.navigateByUrl('/', { skipLocationChange: true}).then(() => {
        this.router.navigate(['/', 'manager']);
      })
    })
  }

  delete(id:any) {
    this.reportService.deleteVideo(id).subscribe(() => {
      this.router.navigateByUrl('/', { skipLocationChange: true}).then(() => {
        this.router.navigate(['/', 'manager']);
      })
    })
  }


  constructor(private reportService: ReportService, private router: Router) {}
}

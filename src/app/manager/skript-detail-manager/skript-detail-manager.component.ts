import { Router } from '@angular/router';
import { ReportService } from 'src/app/services/report.service';
import { Component, Input } from '@angular/core';
import { ReportSkript } from '../../dialog/classes/subClasses/reportSkript';

@Component({
  selector: 'app-skript-detail-manager',
  templateUrl: './skript-detail-manager.component.html',
  styleUrls: ['./skript-detail-manager.component.css'],
})
export class SkriptDetailManagerComponent {
  @Input() report!: ReportSkript;
  @Input() editingMode!: boolean;

  calcDateAndTime(time: any): string {
    var date = new Date(time);
    return date.toLocaleDateString() + " " + date.toLocaleTimeString();
  }

  changePriorityUp(id: any, priority: any) {
    if(priority > 1) {
      priority = priority - 1;
      this.reportService.changeSkriptPriority(id, priority).subscribe(() => {
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/', 'manager']);
        }) 
      });
    }
  }

  changePriorityDown(id: any, priority: any) {
    if(priority < 3) {
      priority = priority + 1;
      this.reportService.changeSkriptPriority(id, priority).subscribe(() => {
        this.router.navigateByUrl('/', { skipLocationChange: true}).then(() => {
          this.router.navigate(['/', 'manager']);
        })
      });
    }
  }

  statusInProgress(id:any) {
    var time = new Date().getTime();
    this.reportService.changeSkriptStaus(id, 'in Bearbeitung', time, 0).subscribe(() => {
      this.router.navigateByUrl('/', { skipLocationChange: true}).then(() => {
        this.router.navigate(['/', 'manager']);
      })
    })
  }

  statusDone(id:any, date:any) {
    var time = new Date().getTime();
    this.reportService.changeSkriptStaus(id, 'abgeschlossen', date, time).subscribe(() => {
      this.router.navigateByUrl('/', { skipLocationChange: true}).then(() => {
        this.router.navigate(['/', 'manager']);
      })
    })
  }

  delete(id:any) {
    this.reportService.deleteSkript(id).subscribe(() => {
      this.router.navigateByUrl('/', { skipLocationChange: true}).then(() => {
        this.router.navigate(['/', 'manager']);
      })
    })
  }


  constructor(private reportService: ReportService, private router: Router) {}

}

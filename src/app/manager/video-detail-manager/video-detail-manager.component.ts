import { Component, Input } from '@angular/core';
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
}

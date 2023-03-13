import { ReportVideo } from '../../dialog/classes/subClasses/reportVideo';
import { Component, Input } from '@angular/core';
import { Report } from '../../dialog/classes/Report';

@Component({
  selector: 'app-video-detail-student',
  templateUrl: './video-detail-student.component.html',
  styleUrls: ['./video-detail-student.component.css'],
})
export class VideoDetailStudentComponent {
  @Input() report!: ReportVideo;

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

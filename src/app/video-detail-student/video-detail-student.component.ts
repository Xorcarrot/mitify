import { ReportVideo } from './../dialog/classes/subClasses/reportVideo';
import { Component, Input } from '@angular/core';
import { Report } from '../dialog/classes/Report';

@Component({
  selector: 'app-video-detail-student',
  templateUrl: './video-detail-student.component.html',
  styleUrls: ['./video-detail-student.component.css']
})
export class VideoDetailStudentComponent {

  @Input() report!: ReportVideo;

}

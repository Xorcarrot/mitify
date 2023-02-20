import { Component, Input } from '@angular/core';
import { ReportVideo } from '../dialog/classes/subClasses/reportVideo';

@Component({
  selector: 'app-video-detail-manager',
  templateUrl: './video-detail-manager.component.html',
  styleUrls: ['./video-detail-manager.component.css']
})
export class VideoDetailManagerComponent {

  @Input() report!: ReportVideo;
  @Input() editingMode!: boolean;

}

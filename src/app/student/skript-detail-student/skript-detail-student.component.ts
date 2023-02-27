import { ReportSkript } from '../../dialog/classes/subClasses/reportSkript';
import { Report } from 'src/app/dialog/classes/Report';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skript-detail-student',
  templateUrl: './skript-detail-student.component.html',
  styleUrls: ['./skript-detail-student.component.css']
})
export class SkriptDetailStudentComponent {

  @Input() report!: ReportSkript;

}

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

}

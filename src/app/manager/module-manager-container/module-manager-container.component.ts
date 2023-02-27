import { DatasourceService } from '../../module-manager-table/services/datasource.service';
import { ReportService } from '../../module-manager-table/services/report.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-module-manager-container',
  templateUrl: './module-manager-container.component.html',
  styleUrls: ['./module-manager-container.component.css']
})
export class ModuleManagerContainerComponent implements OnInit {

  @Input() token: any;

  constructor() {
    
  }

  ngOnInit(): void {
  }

}

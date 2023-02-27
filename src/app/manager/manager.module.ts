import { VideoDetailManagerComponent } from './video-detail-manager/video-detail-manager.component';
import { SkriptDetailManagerComponent } from './skript-detail-manager/skript-detail-manager.component';
import { ModuleManagerTableComponent } from './../module-manager-table/module-manager-table.component';
import { ModuleManagerTableClosedComponent } from './module-manager-table-closed/module-manager-table-closed.component';
import { ModuleManagerContainerComponent } from './module-manager-container/module-manager-container.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerComponent } from './manager.component';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [
    ManagerComponent,
    ModuleManagerContainerComponent,
    ModuleManagerTableClosedComponent,
    ModuleManagerTableComponent,
    SkriptDetailManagerComponent,
    VideoDetailManagerComponent
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatStepperModule,
    MatChipsModule,
    MatButtonToggleModule,
    MatSliderModule,
    MatExpansionModule,
    CdkAccordionModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatTooltipModule,
  ]
})
export class ManagerModule { }

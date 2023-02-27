import { StudentRoutingModule } from './student-routing.module';
import { StudentTableClosedComponent } from './student-table-closed/student-table-closed.component';
import { StudentContainerComponent } from './student-container/student-container.component';
import { VideoDetailStudentComponent } from './video-detail-student/video-detail-student.component';
import { SkriptDetailStudentComponent } from './skript-detail-student/skript-detail-student.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentComponent } from './student.component';
import { StudentTableComponent } from './student-table/student-table.component';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatDialogModule} from '@angular/material/dialog';
import {MatStepperModule} from '@angular/material/stepper'; 
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSliderModule} from '@angular/material/slider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table'; 
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTooltipModule} from '@angular/material/tooltip';
import {CdkAccordionModule} from '@angular/cdk/accordion'; 
import { MatSortModule } from '@angular/material/sort';
import { TestComComponent } from './test-com/test-com.component';

@NgModule({
  declarations: [
    StudentComponent,
    StudentTableComponent,
    SkriptDetailStudentComponent,
    VideoDetailStudentComponent,
    StudentContainerComponent,
    StudentTableClosedComponent,
    TestComComponent,
    
  ],
  imports: [
    MatInputModule,
    CommonModule,
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
    StudentRoutingModule
  ]
})
export class StudentModule { }

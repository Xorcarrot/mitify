import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
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

import { HeaderComponent } from './header/header.component';
import { DialogComponent } from './dialog/dialog.component';
import { LoginComponent } from './login/login/login.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatSortModule } from '@angular/material/sort';
import { ModuleManagerContainerComponent } from './module-manager-container/module-manager-container.component';
import { ModuleManagerTableComponent } from './module-manager-table/module-manager-table.component';
import { ModuleManagerTableClosedComponent } from './module-manager-table-closed/module-manager-table-closed.component';
import { PlaceholderNoUserComponent } from './placeholder-no-user/placeholder-no-user.component';
import { SkriptDetailManagerComponent } from './skript-detail-manager/skript-detail-manager.component';
import { VideoDetailManagerComponent } from './video-detail-manager/video-detail-manager.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DialogComponent,
    LoginComponent,
    ModuleManagerContainerComponent,
    ModuleManagerTableComponent,
    ModuleManagerTableClosedComponent,
    PlaceholderNoUserComponent,
    SkriptDetailManagerComponent,
    VideoDetailManagerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatStepperModule,
    MatChipsModule,
    MatButtonToggleModule,
    MatSliderModule,
    RouterModule,
    AppRoutingModule,
    MatExpansionModule,
    CdkAccordionModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

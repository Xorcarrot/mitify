import { ReportServiceService } from './../report-service.service';
import { ReportVideo } from './classes/subClasses/reportVideo';
import { ReportSkript } from './classes/subClasses/reportSkript';
import { Modul } from './classes/modul';
import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  element: String = "";
  illOrTab: Number = 0;

  minutesStart = 0;
  secondsStart = 0;

  minutesEnd = 10;
  secondsEnd = 0;

  report!: any;
  skriptAdded: boolean = false;
  videoAdded: boolean = false;

  genralFormGroup = this._formBuilder.group({
    type: ['', Validators.required],
    learningElement: ['', Validators.required],
    modul: ['', Validators.required]
  });

  elementFormGroup: any;

  constructor(private _formBuilder: FormBuilder, private httpService: ReportServiceService) {}

  moduls: Modul[] = [
    {value: 'Big Data', name: 'Big Data'},
    {value: 'Mathematik Grundlagen', name: 'Mathematik Grundlagen'},
    {value: 'Turnen', name: 'Turnen'},
  ];

  genrateForm(type: any, learningElement: any, modul: any) {

    this.elementFormGroup = null;
    this.element = learningElement;

    if(learningElement == "Skript") {

      this.report = new ReportSkript(type, modul, learningElement);

      this.elementFormGroup = this._formBuilder.group({
        pageNumber: ['', [
          Validators.required,
          Validators.min(0),
          Validators.max(400)
        ]],
        chapter: ['', [
          Validators.required,
          Validators.min(0),
          Validators.max(20)
        ]],
        tabOrIllNumber: ['', [
          Validators.min(0),
          Validators.max(100)
        ] ],
        description: ['', [
          Validators.required,
          Validators.maxLength(500)
        ]]
      });

    } else if(learningElement == "Video") {

      this.report = new ReportVideo(type, modul, learningElement);

      this.elementFormGroup = this._formBuilder.group({
        title: ['', [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(20)
        ]],
        timestampStart: ['', [
          Validators.required,
          Validators.min(0),
          Validators.max(3599)
        ]],
        timestampEnd: ['', [
          Validators.required,
          Validators.min(1),
          Validators.max(3600)
        ]],
        videoUrl: ['', [
          Validators.maxLength(50)
        ]],
        description: ['', [
          Validators.required,
          Validators.maxLength(500)
        ]]
      })
    }

  }

  inputTab() {
    if(this.illOrTab == 1) {
      this.illOrTab = 0;
    } else {
      this.illOrTab = 1;
    }
  }

  inputIll() {
    if(this.illOrTab == 2) {
      this.illOrTab = 0;
    } else {
      this.illOrTab = 2;
    }
  }

  addSkript(pageNumber: any, chapter: any, tabOrIllNumber: any, description: any) {

    this.report.page = pageNumber;
    this.report.chapter = chapter;
    this.report.description = description;

    if(this.illOrTab == 1) {
      this.report.tableNumber = tabOrIllNumber;
      this.report.illustrationNumber = 0;
    } else if(this.illOrTab == 2) {
      this.report.illustrationNumber = tabOrIllNumber;
      this.report.tableNumber = 0
    } else {
      this.report.tableNumber = 0
      this.report.illustrationNumber = 0;
    }

    this.videoAdded = false;
    this.skriptAdded = true;
  }

  addVideo(title: any, timestampStart: any, timestampEnd: any,videoUrl: any, description: any) {

    this.report.videoTitle = title;
    this.report.timestampStart = timestampStart;
    this.report.timestampEnd = timestampEnd;
    this.report.videoURL = videoUrl;
    this.report.description = description;

    this.skriptAdded = false;
    this.videoAdded = true;
  }

  calcTime(seconds: number): String {
    var time = new Date(seconds * 1000);

    var minutes = time.getUTCMinutes();
    var seconds = time.getUTCSeconds();

    return minutes.toString().padStart(2, '0') + ":" + seconds.toString().padStart(2, '0');
  }

  updateTimeStart(event: any, minutes: boolean) {
    if(minutes == true) {
      this.minutesStart = event.value * 60;
    }
    if(minutes == false) {
      this.secondsStart = event.value;
    }
    var time = this.minutesStart + this.secondsStart;
    if(time > this.report.timestampEnd) {
      this.report.timestampEnd = time + 1;
    }
    this.report.timestampStart = time;
  }

  updateInput(event: any) {
    var time = new Date(event.value)
  }


  postSkript(report: ReportSkript): void {
    this.httpService.addSkript(report).subscribe();
  }

  postVideo(report: ReportVideo): void {
    this.httpService.addVideo(report).subscribe();
  }

}

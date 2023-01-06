import { ReportVideo } from './../../assets/apiClasses/errorReportSubclasses/reportVideo';
import { ReportSkript } from './../../assets/apiClasses/errorReportSubclasses/reportSkript';
import { Modul } from './../../assets/formularElement/modul';
import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Report } from 'src/assets/apiClasses/Report';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  element: String = "";
  illOrTab: Number = 0;

  report!: any;

  genralFormGroup = this._formBuilder.group({
    type: ['', Validators.required],
    learningElement: ['', Validators.required],
    modul: ['', Validators.required]
  });

  elementFormGroup: any;

  constructor(private _formBuilder: FormBuilder) {}

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

      this.report = new ReportVideo(type, learningElement, modul);

      this.elementFormGroup = this._formBuilder.group({
        title: ['', Validators.required],
        timestampStart: ['', Validators.required],
        timestampEnd: ['', Validators.required],
        videoUrl: ['', Validators.required],
        description: ['', Validators.required]
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

    this.report.pageNumber = pageNumber;
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
  }

}

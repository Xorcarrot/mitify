import { UserDataService } from 'src/app/user/userData.service';
import { ReportServiceService } from './../services/report-service.service';
import { ReportVideo } from './classes/subClasses/reportVideo';
import { ReportSkript } from './classes/subClasses/reportSkript';
import { Modul } from './classes/modul';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

/**
 * Erstellung von neuen Reports.
 * Component hält die Informationen für das Formular, Validierungsregeln der Inputs und übergibt Reports zum speichern im Backend.
 * @author Patrick Pußwald
 */
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent {
  /**
   * Für dynamisches formularladen wird hier die Art des Reports gespeichert.
   */
  element: String = '';
  /**
   * Speichert die Information ob eine Abbildung oder eine Tabelle gewählt wurde.
   */
  illOrTab: Number = 0;
  /**
   * Video: Minuten des Zeitstempels Start
   */
  minutesStart = 0;
  /**
   * Video: Sekunden des Zeitstempels Start
   */
  secondsStart = 0;
  /**
   * Video: Minuten des Zeitstempels Ende
   */
  minutesEnd = 10;
  /**
   * Video: Sekunden des Zeitstempels Ende
   */
  secondsEnd = 0;
  /**
   * Report wird erstellt bis Skript oder Video gewählt wurde, und wird dann in das jeweilige Objekt umgewandelt.
   */
  report!: any;
  /**
   * TRUE wenn für Skript entschieden.
   */
  skriptAdded: boolean = false;
  /**
   * TRUE wenn für Video entschieden.
   */
  videoAdded: boolean = false;

  /**
   * Initalisiert die Erste Gruppe des Formulares
   */
  genralFormGroup = this._formBuilder.group({
    type: ['', Validators.required],
    learningElement: ['', Validators.required],
    modul: ['', Validators.required],
  });

  /**
   * Initalisiert die Zweite Gruppe des Formulares
   */
  elementFormGroup: any;

  /**
   * Constructor der beim laden der Komponente div. Service injeziert.
   * @param _formBuilder Für die Erstellung von Formularen
   * @param httpService Zum Senden der neuen Meldung ans Beckend
   * @param userData Hält Information über User und Token
   * @param router Zum weiterleiten an die Tabellen
   */
  constructor(
    private _formBuilder: FormBuilder,
    private httpService: ReportServiceService,
    private userData: UserDataService,
    private router: Router
  ) {}

  /**
   * Zwei Module werden erstellt.
   * @todo muss ins Backend verlagert werden. Nur Platzhalter
   */
  moduls: Modul[] = [
    { id: 1, name: 'Big Data' },
    { id: 2, name: 'Mathematik Grundlagen' },
  ];

  /**
   * Initalisiert das Formular und erstellt die benötigte Meldung
   * @param type Typ der Meldung
   * @param learningElement Information ob Skript oder Video
   * @param modul Modul der Meldung
   */
  genrateForm(type: any, learningElement: any, modul: any) {
    this.elementFormGroup = null;
    this.element = learningElement;
    let modulId;

    if (modul == 1) {
      modulId = 1;
    } else {
      modulId = 2;
    }

    if (learningElement == 'Skript') {
      this.report = new ReportSkript(type, modul, learningElement);
      this.report.setModulId(modulId);
      this.report.setUser(
        this.userData.name,
        this.userData.first_name,
        this.userData.eMail
      );

      this.elementFormGroup = this._formBuilder.group({
        pageNumber: [
          '',
          [Validators.required, Validators.min(0), Validators.max(400)],
        ],
        chapter: [
          '',
          [Validators.required, Validators.min(0), Validators.max(20)],
        ],
        tabOrIllNumber: ['', [Validators.min(0), Validators.max(100)]],
        description: ['', [Validators.required, Validators.maxLength(200)]],
      });
    } else if (learningElement == 'Video') {
      this.report = new ReportVideo(type, modul, learningElement);
      this.report.setModulId(modulId);
      this.report.setUser(
        this.userData.name,
        this.userData.first_name,
        this.userData.eMail
      );

      this.elementFormGroup = this._formBuilder.group({
        title: [
          '',
          [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(20),
          ],
        ],
        timestampStart: [
          '',
          [Validators.required, Validators.min(0), Validators.max(3599)],
        ],
        timestampEnd: [
          '',
          [Validators.required, Validators.min(1), Validators.max(3600)],
        ],
        videoUrl: ['', [Validators.maxLength(50)]],
        description: ['', [Validators.required, Validators.maxLength(500)]],
      });
    }
  }

  /**
   * Trigger für eine Tabelle
   */
  inputTab() {
    if (this.illOrTab == 1) {
      this.illOrTab = 0;
    } else {
      this.illOrTab = 1;
    }
  }

  /**
   * Trigger für eine Abbildung
   */
  inputIll() {
    if (this.illOrTab == 2) {
      this.illOrTab = 0;
    } else {
      this.illOrTab = 2;
    }
  }

  /**
   * Erstellt einen SkriptReport
   * @param pageNumber Seitennummer des Fehlers
   * @param chapter Kapitelnummer des Fehlers
   * @param tabOrIllNumber Kenner ob Tabelle oder Abbildung hinzugefügt wird
   * @param description Beschreibung der Meldung
   */
  addSkript(
    pageNumber: any,
    chapter: any,
    tabOrIllNumber: any,
    description: any
  ) {
    this.report.page = pageNumber;
    this.report.chapter = chapter;
    this.report.description = description;

    if (this.illOrTab == 1) {
      this.report.tableNumber = tabOrIllNumber;
      this.report.illustrationNumber = 0;
    } else if (this.illOrTab == 2) {
      this.report.illustrationNumber = tabOrIllNumber;
      this.report.tableNumber = 0;
    } else {
      this.report.tableNumber = 0;
      this.report.illustrationNumber = 0;
    }

    this.videoAdded = false;
    this.skriptAdded = true;
  }

  /**
   * Erstellt einen VideoReport
   * @param title Titel des Videos
   * @param timestampStart Zeitstempel Start wo der Fehler ist
   * @param timestampEnd Zeitstempel Ende wo der Fehler ist
   * @param videoUrl URL des Videos
   * @param description Beschreibung des Fehlers
   */
  addVideo(
    title: any,
    timestampStart: any,
    timestampEnd: any,
    videoUrl: any,
    description: any
  ) {
    this.report.videoTitle = title;
    this.report.timestampStart = timestampStart;
    this.report.timestampEnd = timestampEnd;
    this.report.videoURL = videoUrl;
    this.report.description = description;

    this.skriptAdded = false;
    this.videoAdded = true;
  }

  /**
   * Rechnet Sekunden in ein "mm:ss" Format um
   * @param seconds Zeit in Sekunden
   * @returns Zeit im Format "mm:ss"
   * @todo Muss in einen eigenen Service verlagert werden
   */
  calcTime(seconds: number): String {
    var time = new Date(seconds * 1000);

    var minutes = time.getUTCMinutes();
    var seconds = time.getUTCSeconds();

    return (
      minutes.toString().padStart(2, '0') +
      ':' +
      seconds.toString().padStart(2, '0')
    );
  }

  /**
   * Update den param Zeitstempel für ein Video
   * @param event Event des Inputs
   * @param minutes Zeit in Minuten
   */
  updateTimeStart(event: any, minutes: boolean) {
    if (minutes == true) {
      this.minutesStart = event.value * 60;
    }
    if (minutes == false) {
      this.secondsStart = event.value;
    }
    var time = this.minutesStart + this.secondsStart;
    if (time > this.report.timestampEnd) {
      this.report.timestampEnd = time + 1;
    }
    this.report.timestampStart = time;
  }

  /**
   * Für Updaten des Inputs
   * @param event Event des Inputs
   */
  updateInput(event: any) {
    var time = new Date(event.value);
  }

  /**
   * Sendet ein ReportSkript zum Backend zum speichern
   * @param report ReportSkirpt zum speichern
   */
  postSkript(report: ReportSkript): void {
    this.httpService.addSkript(report).subscribe(() => {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        if (this.userData.role_id == 1) {
          this.router.navigate(['/', 'user']);
        } else if (this.userData.role_id == 2) {
          this.router.navigate(['/', 'manager']);
        }
      });
    });
  }

  /**
   * Sendet ein ReportVideo zum Backend zum speichern
   * @param report ReportVideo zum speichern
   */
  postVideo(report: ReportVideo): void {
    this.httpService.addVideo(report).subscribe(() => {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        if (this.userData.role_id == 1) {
          this.router.navigate(['/', 'user']);
        } else if (this.userData.role_id == 2) {
          this.router.navigate(['/', 'manager']);
        }
      });
    });
  }

  /**
   * Wandelt eine ModulID in einen String um
   * @param moduleId ID des Moduls
   * @returns Name des Moduls
   * @todo Informationen über die Module müssen vom Backend kommen um später neue Module anlegen zu können.
   */

  getModule(moduleId: number): any {
    console.log(moduleId);
    switch (moduleId) {
      case 1:
        return 'Big Data';
      case 2:
        return 'Mathematik Grundlagen';
    }
  }
}

import { Report } from "../Report";

//Klasse die Reports um weitere Attribute erweitert
export class ReportVideo extends Report {

    title?: String;                     //Titel des Videos
    timestampStart?: number;            //Zeitstempel in Sekunden
    timestampEnd?: number;              //Zeitstempel in Sekunden
    videoUrl?: String;                  //URL des Videos

    
    //Constructor zum erstellen eines neuen Srikpt Meldung Objekts
    constructor (type: string, modul: String, learningElement: String, description?: String, title?: String, timestampStart?: number, timestampEnd?: number, videoUrl?: String,
        id?: Number, status?: String, priority?: Number, author?: String, eMail?: String, reportDate?: Number, grantedDate?: Number, completedDate?: Number) {

            super(type, modul, learningElement, description, id, status, 
                priority, author, eMail, reportDate, grantedDate, completedDate);

            this.title = title;
            this.timestampStart = timestampStart;
            this.timestampEnd = timestampEnd;
            this.videoUrl = videoUrl;
        }
}
import { Report } from "../Report";

//Klasse die Reports um weitere Attribute erweitert
export class ReportVideo extends Report {

    videoTitle?: String;                     //Titel des Videos
    timestampStart?: number;            //Zeitstempel in Sekunden
    timestampEnd?: number;              //Zeitstempel in Sekunden
    videoURL?: String;                  //URL des Videos

    
    //Constructor zum erstellen eines neuen Srikpt Meldung Objekts
    constructor (type: string, modul: String, description?: String, title?: String, timestampStart?: number, timestampEnd?: number, videoUrl?: String,
        id?: number, status?: String, priority?: Number, author?: String, eMail?: String, reportDate?: number, grantedDate?: number, completedDate?: number) {

            super(type, modul, description, id, status, 
                priority, author, eMail, reportDate, grantedDate, completedDate);

            this.videoTitle = title;
            this.timestampStart = timestampStart;
            this.timestampEnd = timestampEnd;
            this.videoURL = videoUrl;
        }

    getType(): number {
        return 2;
    }

    calcTimeToString(time: any): String {
        var timeC = new Date(time * 1000);
    
        var minutes = timeC.getUTCMinutes();
        var seconds = timeC.getUTCSeconds();
    
        return minutes.toString().padStart(2, '0') + ":" + seconds.toString().padStart(2, '0');
      }
}
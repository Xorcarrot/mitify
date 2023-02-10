//Klasse die alle Attribute die sich die Meldungen teilen zusammenfasst

export abstract class Report {

    id?: Number;                    //ID zum Unterscheiden der Objekte
    status?: String;                //Aktueller Status der Meldung (NEU|IN BEARBEITUNG|ABGESCHLOSSEN|ABGELEHNT)
    reportType?: String;                  //Angabe zum Typ der Meldung (Fehler|Verbesserungsvorschlag|Inhaltsergänzung)
    priority?: Number;              //Priorität der Meldung(1 = niedrig|2 = mittel|3 = hoch)
    module?: String;                 //Angabe zum Modul
    author?: String;                //Ersteller der Meldung
    eMail?: String;                 //Email des Erstellers
    reportDate?: Number;            //Datum in Millisekunden an dem der Fehler erstellt wurde
    grantedDate?: Number;           //Datum in Millisekunden an dem der Fehler zu Bearbeitung freigegeben wurde
    completedDate?: Number;         //Datum in Millisekunden an dem die Fehlerbehebung abgeschlossen und abgelehnt wurde
    description?: String;           //Beschreibung zum Fehler


    //Constructor der für die Erstellung einer neuen Meldung verwendet wird
    constructor(type: String, modul: String, learningElement: String, description?: String, id?: Number, status?: String, 
        priority?: Number, author?: String, eMail?: String, reportDate?: Number, grantedDate?: Number, completedDate?: Number) {

        this.reportType = type;
        this.module = modul;
        this.description = description;

        //Wenn der String Status leer ist wird der If block aktiv und ein neues Objekt kann generiert werden
        if(!status) {
            this.status = "NEW";
            this.priority = 1;
            this.author = "Platzhalter Joe";                    //in Arbeit: benötigt LOGIN + BENUTZERVERWALTUNG
            this.eMail = "joe.platzhalter@iu.de",               //in Arbeit: benötigt LOGIN + BENUTZERVERWALTUNG
            this.reportDate = new Date().getTime();
        }

        //Baut das fertig Objekt vom Backend zusammen
        else {
            this.id = id;
            this.status = status;
            this.priority = priority;
            this.author = author;
            this.eMail = eMail;
            this.reportDate = reportDate;
            this.grantedDate = grantedDate;
            this.completedDate = completedDate;
        }
    }
}
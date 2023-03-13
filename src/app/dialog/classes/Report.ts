//Klasse die alle Attribute die sich die Meldungen teilen zusammenfasst

export abstract class Report {

    id?: Number;                    //ID zum Unterscheiden der Objekte
    status?: String;                //Aktueller Status der Meldung (NEU|IN BEARBEITUNG|ABGESCHLOSSEN|ABGELEHNT)
    reportType?: string;            //Angabe zum Typ der Meldung (Fehler|Verbesserungsvorschlag|Inhaltsergänzung)
    priority?: Number;              //Priorität der Meldung(1 = niedrig|2 = mittel|3 = hoch)
    module?: String;                 //Angabe zum Modul
    university_module_id?: number;
    author?: String;                //Ersteller der Meldung
    eMail?: String;                 //Email des Erstellers
    report_date?: number;            //Datum in Millisekunden an dem der Fehler erstellt wurde
    granted_date?: number;           //Datum in Millisekunden an dem der Fehler zu Bearbeitung freigegeben wurde
    completed_date?: number;         //Datum in Millisekunden an dem die Fehlerbehebung abgeschlossen und abgelehnt wurde
    description?: String;           //Beschreibung zum Fehler


    //Constructor der für die Erstellung einer neuen Meldung verwendet wird
    constructor(type: string, modul: String, description?: String, id?: Number, status?: String, 
        priority?: Number, author?: String, eMail?: String, reportDate?: number, grantedDate?: number, completedDate?: number) {

        this.reportType = type;
        this.module = modul;
        this.description = description;

        //Wenn der String Status leer ist wird der If block aktiv und ein neues Objekt kann generiert werden
        if(!status) {
            this.status = "neu";
            this.priority = 1;      
            this.report_date = new Date().getTime();
        }

        //Baut das fertig Objekt vom Backend zusammen
        else {
            this.id = id;
            this.status = status;
            this.priority = priority;
            this.author = author;
            this.eMail = eMail;
            this.report_date = reportDate;
            this.granted_date = grantedDate;
            this.completed_date = completedDate;
        }
    }

    calcDateAndTime(time: any): string {
        var date = new Date(time);
        return date.toLocaleDateString() + " " + date.toLocaleTimeString();
    }

    setUser(name: string, first_name: string, email: string): void {
        this.author = first_name + ' ' + name;
        this.eMail = email;
    }

    setModulId(id: number) {
        this.university_module_id = id;
    }

}
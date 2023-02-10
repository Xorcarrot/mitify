import { Report } from "../Report";

//Klasse die Reports um weitere Attribute erweitert
export class ReportSkript extends Report {

    page?: Number;                    //Seitennummer wo sich der Fehler befindet
    chapter?: Number;                       //Nummer des Kapitels in dem sich der Fehler befindet
    illustrationNumber?: Number;            //Nummer der Abblildung in der sich der Fehler befindet
    tableNumber?: Number;                   //Nummer der Tabeller in der sich der Fehler befindet

    
    //Constructor zum erstellen eines neuen Srikpt Meldung Objekts
    constructor (type: string, modul: String, learningElement: String, description?: String, pageNumber?: Number, chapter?: Number, illustrationNumber?: Number, tableNumber?: Number, 
        id?: Number, status?: String, priority?: Number, author?: String, eMail?: String, reportDate?: Number, grantedDate?: Number, completedDate?: Number) {

            super(type, modul, learningElement, description, id, status, 
                priority, author, eMail, reportDate, grantedDate, completedDate);

            this.page = pageNumber;
            this.chapter = chapter;
            this.illustrationNumber = illustrationNumber;       //wenn keine Abbildung angeben ist, wird hier eine 0 eingefügt
            this.tableNumber = tableNumber;                     //wenn keine Tabelle angegeben ist, wird hier eine 0 eingefügt
        }
}
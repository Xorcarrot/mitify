import { ReportVideo } from './../app/dialog/classes/subClasses/reportVideo';
import { ReportSkript } from './../app/dialog/classes/subClasses/reportSkript';
import { Report } from 'src/app/dialog/classes/Report';

export class REPORTS {

    reports: Report[] = [];

    constructor() {
        this.reports.push(new ReportVideo('Fehler', 'Bigdata', 'Irgendwo da gab es unstimmigkeiten, wo sie sich selbsts widersprochen haben!', 'Die Aufzucht von Fischen', 250, 290, 'https://irgendwas.de/sepp',
            14, 'New', 2, 'Werner Beinhart', 'werner@hart.all', 1676713693150, 1676713693150, 1676713693150));
        this.reports.push(new ReportSkript('Alarm', 'Turnen', 'Ich weiß nicht genau wo ich hinspringen soll!', 10, 2, 0, 4, 10, 'in Bearbeitung',
            3, 'Fred Fredderick', 'fred@fredn.fr', 1676713693150, 1676713694250, 1676713694250));
        this.reports.push(new ReportVideo('Fehler', 'Bigdata', 'Irgendwo da gab es unstimmigkeiten, wo sie sich selbsts widersprochen haben!', 'Die Aufzucht von Fischen', 2300, 2350, 'https://irgendwas.de/sepp',
            2, 'New', 1, 'Werner Beinhart', 'werner@hart.all', 3223445, 3223455, 3223666));
        this.reports.push(new ReportVideo('Fehler', 'Bigdata', 'Irgendwo da gab es unstimmigkeiten, wo sie sich selbsts widersprochen haben!', 'Die Aufzucht von Fischen', 2300, 2350, 'https://irgendwas.de/sepp',
            6, 'New', 2, 'Werner Beinhart', 'werner@hart.all', 3223445, 3223455, 3223666));
        this.reports.push(new ReportVideo('Fehler', 'Bigdata', 'Irgendwo da gab es unstimmigkeiten, wo sie sich selbsts widersprochen haben!', 'Die Aufzucht von Fischen', 2300, 2350, 'https://irgendwas.de/sepp',
            100, 'New', 1, 'Werner Beinhart', 'werner@hart.all', 3223445, 3223455, 3223666));
    }

    getReports(): Report[] {
        return this.reports;
    }

}
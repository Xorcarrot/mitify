/**
 * Alle Informationen um eine Postfunktion zum Backend für Skripte zu schicken. SkriptContainer ist dazu noch nötig.
 */
export class SkriptPost {
  reportType!: any;
  description!: any;
  status!: any;
  priority!: any;
  author!: any;
  eMail!: any;
  page!: any;
  chapter!: any;
  illustrationNumber!: any;
  tableNumber!: any;
  report_date!: any;
  granted_date: any = 0;
  completed_date: any = 0;
  university_module_id: any;

  constructor(
    reportType: any,
    module: any,
    description: any,
    status: any,
    priority: any,
    page: any,
    chapter: any,
    illustrationNumber: any,
    tableNumber: any,
    report_date: any,
    mitify_user_id: any,
    author: any,
    eMail: any,
    moduleId: any
  ) {
    this.reportType = reportType;
    this.description = description;
    this.status = status;
    this.priority = priority;
    this.page = page;
    this.chapter = chapter;
    this.illustrationNumber = illustrationNumber;
    this.tableNumber = tableNumber;
    this.report_date = report_date;
    this.author = author;
    this.eMail = eMail;
    this.university_module_id = moduleId;
  }
}

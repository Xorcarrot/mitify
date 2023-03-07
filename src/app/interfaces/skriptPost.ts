export class SkriptPost {

    reportType!: any;
    module!: any;
    description!: any; 
    status!: any;
    priority!: any; 
    author: any = null;
    eMail: any = null;
    page!: any;
    chapter!: any;
    illustrationNumber!: any; 
    tableNumber!: any;
    report_date!: any; 
    granted_date: any = null;
    completed_date: any = null;
    mitify_user_id!: any;

        constructor(reportType: any, module: any, description: any, status: any, priority: any, page: any, chapter: any, illustrationNumber: any, tableNumber: any, report_date: any, mitify_user_id: any) {
            this.reportType = reportType;
            this.module = module;
            this.description = description;
            this.status = status;
            this.priority = priority;
            this.page = page;
            this.chapter = chapter;
            this.illustrationNumber = illustrationNumber;
            this.tableNumber = tableNumber;
            this.report_date = report_date;
            this.mitify_user_id =mitify_user_id;
        }
    
}

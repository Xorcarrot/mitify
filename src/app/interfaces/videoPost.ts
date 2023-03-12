export class VideoPost {

    reportType!: any;
    module!: any;
    description!: any; 
    status!: any;
    priority!: any; 
    author!: any;
    eMail!: any;
    videoTitle!: any;
    timestampStart!: any;
    timestampEnd!: any; 
    videoURL!: any;
    report_date!: any; 
    granted_date: any = 0;
    completed_date: any = 0;
    mitify_user_id!: any;

        constructor(reportType: any, module: any, description: any, status: any, priority: any, videoTitle: any, timestampStart: any, timestampEnd: any, videoURL: any, report_date: any, mitify_user_id: any, author: any, eMail: any) {
            this.reportType = reportType;
            this.module = module;
            this.description = description;
            this.status = status;
            this.priority = priority;
            this.videoTitle = videoTitle;
            this.timestampStart = timestampStart;
            this.timestampEnd = timestampEnd;
            this.videoURL = videoURL;
            this.report_date = report_date;
            this.mitify_user_id =mitify_user_id;
            this.author = author;
            this.eMail = eMail;
        }
    
}
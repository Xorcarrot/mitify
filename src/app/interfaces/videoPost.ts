/**
 * Alle Informationen um eine Postfunktion zum Backend für Videos zu schicken. VideoContainer ist dazu noch nötig.
 */
export class VideoPost {
  reportType!: any;
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
  university_module_id!: any;

  constructor(
    reportType: any,
    module: any,
    description: any,
    status: any,
    priority: any,
    videoTitle: any,
    timestampStart: any,
    timestampEnd: any,
    videoURL: any,
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
    this.videoTitle = videoTitle;
    this.timestampStart = timestampStart;
    this.timestampEnd = timestampEnd;
    this.videoURL = videoURL;
    this.report_date = report_date;
    this.author = author;
    this.eMail = eMail;
    this.university_module_id = moduleId;
  }
}

/**
 * Interface zum Verändern des aktuellen Status inklusive dazugehöriger Datume
 */
export interface VideoStatus {
  video_report: {
    status: any;
    granted_date: any;
    completed_date: any;
  };
}

/**
 * Interface zum Verändern des aktuellen Status inklusive dazugehöriger Datume
 */
export interface SkirptStatus {
  skript_report: {
    status: any;
    granted_date: any;
    completed_date: any;
  };
}

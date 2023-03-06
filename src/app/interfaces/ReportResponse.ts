export interface ReportResponse {
    'error_report': {
        'author': string,
        'chapter': number,
        'description': string,
        'eMail': string,
        'id': number,
        'illustrationNumber': number,
        'module': string,
        'page': number,
        'priority': number,
        'reportType': string,
        'status': string,
        'tableNumber': number,
        'timestampEnd': number,
        'timestampStart': number,
        'videoTitle': string,
        'videoURL': string,
        'report_date': number,          
        'granted_date': number,       
        'completed_date': number,
        'mitify_user': {
            'email': string,
            'name': string,
            'first_name': string,
            'role': {
                'title': string,
            }
        }
    }
    
}
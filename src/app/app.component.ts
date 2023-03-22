import { Router } from '@angular/router';
import { UserDataService } from './user/userData.service';
import { LoginComponent } from './login/login.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

/**
 * App Component die den Start der Webanwendung hält. Öffnet auch den Logindialog und und lässt nur weiter wenn dieser erfolgreich abgeschlossen wurde
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  /**
   * Titel des Projekts
   */
  title = 'mitify';
  /**
   * Referenz zur LoginComponent
   */
  dialogRef!: MatDialogRef<LoginComponent>;

  /**
   * Email des Users
   * @todo soll gegen UserDataService ersetzt werden
   */
  userEmail: string = '';
  /**
   * Rolle des Users
   * @todo soll gegen UserDataService ersetzt werden
   */
  userRole: number = 0;

  /**
   * Boolean ob Login erfolgreich war und der User weitergeleitet werden kann
   */
  logedIn: boolean = false;

  /**
   * Injeziert div. Service
   * @param dialog Zum öffnen eines Dialogs
   * @param userData Entählt Informationen zum User
   * @param router Dient zur Navigierung in der Webapp
   */
  constructor(
    public dialog: MatDialog,
    public userData: UserDataService,
    private router: Router
  ) {}

  /**
   * Öffnet LoginDialog beim laden der AppComponent
   */
  ngOnInit(): void {
    if (this.userRole == 0) {
      this.openDialog();
    }
  }

  /**
   * Funktion zum öffner des LoginDialogs und leitet den User dann zu den richtigen Tabellen
   */
  openDialog(): void {
    this.dialogRef = this.dialog.open(LoginComponent, {
      disableClose: true,
    });
    this.dialogRef.componentInstance.userRole.subscribe((data) => {
      this.userRole = data;
      if (this.userRole == 1) {
        this.router.navigate(['/', 'user']);
      } else if (this.userRole == 2) {
        this.router.navigate(['/', 'manager']);
      }
    });
    this.dialogRef.componentInstance.userName.subscribe((email) => {
      this.userEmail = email;
      this.closeDialog();
    });
  }

  /**
   * Funktion zum schließen des Dialogs
   */
  closeDialog(): void {
    this.dialogRef.close();
    this.logedIn = true;
  }
}

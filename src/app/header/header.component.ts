import { UserManagementService } from 'src/app/user/userManagement.service';
import { UserDataService } from 'src/app/user/userData.service';
import { DialogComponent } from './../dialog/dialog.component';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

/**
 * Logik öffnet den Dialog zum erstellen eines neuen Reports und hält die möglichkeit zum Ausloggen.
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() author!: string;
  @Input() logedIn!: boolean;

  /**
   * Initalisiert mehrere Service
   * @param dialog Dialog zum erstellen einer neuen Meldung
   * @param userData Hält alle Information zum aktuellen User
   * @param userManagement Funktion für das Userobjekt
   */
  constructor(
    public dialog: MatDialog,
    public userData: UserDataService,
    public userManagement: UserManagementService
  ) {}

  /**
   * Öffnet den Dialog zum erstellen einer neuen Meldung.
   */
  openDialog() {
    this.dialog.open(DialogComponent, {
      disableClose: true,
    });
  }

  /**
   * Logout für den aktuellen User. Token wird gelöscht und Seite erhält einen Refreash
   */
  logOut(): void {
    let token = this.userData.token;
    console.log(token);
    this.userManagement.userSignOut(token).subscribe(
      (data) => {
        console.log('Logout done');
      },
      (error) => {
        console.log('Error');
      }
    );
    window.location.reload();
  }
}

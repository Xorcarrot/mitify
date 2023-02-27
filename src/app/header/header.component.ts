import { UserManagementService } from 'src/app/user/userManagement.service';
import { UserDataService } from 'src/app/user/userData.service';
import { DialogComponent } from './../dialog/dialog.component';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input() author!: string;
  @Input() logedIn!: boolean;

  constructor (public dialog: MatDialog, public userData: UserDataService, public userManagement: UserManagementService) { }

  openDialog() {
    this.dialog.open(DialogComponent, {
      disableClose: true
    });
  }

  logOut(): void {
    let token = this.userData.token;
    console.log(token);
    this.userManagement.userSignOut(token).subscribe(data => {
      console.log("Logout done");
    }, error => {
      console.log("Error");
    });
    window.location.reload();
  }

}

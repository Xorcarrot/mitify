import { Router } from '@angular/router';
import { UserDataService } from './user/userData.service';
import { LoginComponent } from './login/login.component';
import {
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'mitify';
  dialogRef!: MatDialogRef<LoginComponent>;

  userEmail: string = '';
  userRole: number = 0;

  logedIn: boolean = false;

  constructor(
    public dialog: MatDialog,
    public userData: UserDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.userRole == 0) {
      this.openDialog();
    }
  }

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

  closeDialog(): void {
    this.dialogRef.close();
    this.logedIn = true;
  }
}

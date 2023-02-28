import { Router } from '@angular/router';
import { UserDataService } from './user/userData.service';
import { LoginComponent } from './login/login/login.component';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mitify';
  dialogRef!: MatDialogRef<LoginComponent>;

  userEmail: string = '';
  userRole: string = '';

  logedIn: boolean = false;

  constructor(public dialog: MatDialog, public userData: UserDataService,private router: Router) {

  }
  
  ngOnInit(): void {
    if(this.userRole == '') {
      this.openDialog();
    }
    
  }

  openDialog(): void {
    this.dialogRef = this.dialog.open(LoginComponent, {
      disableClose: true
    });
    this.dialogRef.componentInstance.userRole.subscribe(data => {
      this.userRole = data;
      if (this.userRole == 'Student') {
        this.router.navigate(['/', 'user']);
      } else if (this.userRole == "Manager") {
        this.router.navigate(['/', 'manager']);
      }
    });
    this.dialogRef.componentInstance.userName.subscribe(email => {
      this.userEmail = email;
      this.closeDialog();
    })
  }

  closeDialog(): void {
    this.dialogRef.close();
    this.logedIn = true;
  }

}

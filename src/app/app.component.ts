import { LoginComponent } from './login/login/login.component';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
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
  userToken: any = null;

  constructor(public dialog: MatDialog) {

  }
  
  ngOnInit(): void {
    this.openDialog();
  }

  openDialog(): void {
    this.dialogRef = this.dialog.open(LoginComponent, {
      disableClose: true
    });
    this.dialogRef.componentInstance.userToken.subscribe(data => {
      this.userToken = data;
      console.log(data);
    });
    this.dialogRef.componentInstance.userName.subscribe(email => {
      this.userEmail = email;
      console.log(email);
      this.closeDialog();
    })
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}

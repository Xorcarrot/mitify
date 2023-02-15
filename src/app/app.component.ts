import { LoginComponent } from './login/login/login.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mitify';

  constructor(public dialog: MatDialog) {

  }
  ngOnInit(): void {
    this.openDialog();
  }

  openDialog(): void {
    this.dialog.open(LoginComponent, {
      disableClose: true
    });
  }

}

import { DialogComponent } from './../dialog/dialog.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  name = "Joe";
  familyname = "Platzhalter";

  constructor (public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(DialogComponent);
  }

}

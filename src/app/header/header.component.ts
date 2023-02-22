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

  constructor (public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(DialogComponent, {
      disableClose: true
    });
  }

}

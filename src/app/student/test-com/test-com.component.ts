import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/user/userData.service';
import { UserManagementService } from 'src/app/user/userManagement.service';

/**
 * Dient zur Zeit nur den Testen der Verbindung und des richtigen Tokens mit dem Backend
 * @todo Vor Releas entfernen
 */
@Component({
  selector: 'app-test-com',
  templateUrl: './test-com.component.html',
  styleUrls: ['./test-com.component.css'],
})
export class TestComComponent implements OnInit {
  message!: string;

  constructor(
    public userManagement: UserManagementService,
    public userData: UserDataService
  ) {}

  ngOnInit(): void {}

  getData(): void {
    this.userManagement.getData(this.userData.getToken()).subscribe((data) => {
      console.log('User ' + this.userData.getAuthor() + ' requested data.');
      console.log(data);
    });
  }
}

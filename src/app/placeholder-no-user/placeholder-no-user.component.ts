import { UserDataService } from './../user/userData.service';
import { UserManagementService } from './../user/userManagement.service';
import { Component, Inject, Input } from '@angular/core';

@Component({
  selector: 'app-placeholder-no-user',
  templateUrl: './placeholder-no-user.component.html',
  styleUrls: ['./placeholder-no-user.component.css']
})
export class PlaceholderNoUserComponent {

  message!: string;

  constructor(public userManagement: UserManagementService, public userData: UserDataService) {

  }

  getData(): void {
    console.log(this.userData.getToken());
    this.userManagement.getData(this.userData.getToken()).subscribe(data => {
      console.log(data);
    });
  }

}

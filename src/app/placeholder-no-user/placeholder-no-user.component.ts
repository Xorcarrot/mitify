import { UserDataService } from './../user/userData.service';
import { UserManagementService } from './../user/userManagement.service';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Sollten Navigationsprobleme passieren kann diese Component helfen
 * @todo bei Releas entfernen
 */
@Component({
  selector: 'app-placeholder-no-user',
  templateUrl: './placeholder-no-user.component.html',
  styleUrls: ['./placeholder-no-user.component.css'],
})
export class PlaceholderNoUserComponent implements OnInit {
  message!: string;

  constructor(
    public userManagement: UserManagementService,
    public userData: UserDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.userData.role_id == 1) {
      this.router.navigate(['/', 'user']);
    } else if (this.userData.role_id == 2) {
      this.router.navigate(['/', 'manager']);
    }
  }

  getData(): void {
    console.log(this.userData.getToken());
    this.userManagement.getData(this.userData.getToken()).subscribe((data) => {
      console.log(data);
    });
  }
}

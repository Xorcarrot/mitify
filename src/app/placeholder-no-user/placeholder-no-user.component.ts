import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-placeholder-no-user',
  templateUrl: './placeholder-no-user.component.html',
  styleUrls: ['./placeholder-no-user.component.css']
})
export class PlaceholderNoUserComponent {

  @Input() token!: any;

}

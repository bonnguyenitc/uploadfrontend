import { Component, OnInit } from '@angular/core';
import {UserService} from '../../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  avatarUrl: String;
  constructor(private userService: UserService) {
    this.user = this.userService.getUserCurrent();
    // console.log(this.user);
    if (this.user.avatar) {
      this.avatarUrl = 'http://localhost:3000/avatars/' + this.user.avatar;
    } else { this.avatarUrl = 'https://material.angular.io/assets/img/examples/shiba2.jpg'; }
  }

  ngOnInit() {
  }

}

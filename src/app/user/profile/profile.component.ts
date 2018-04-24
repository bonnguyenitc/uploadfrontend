import { Component, OnInit } from '@angular/core';
import {UserService} from '../../user.service';
import { MatDialog } from '@angular/material/dialog';
import {EditorDialogComponent} from '../../editor-dialog/editor-dialog.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  avatarUrl: String;
  constructor(private userService: UserService, private dialog: MatDialog) {
    this.user = this.userService.getUserCurrent();
    // console.log(this.user);
    if (this.user.avatar) {
      this.avatarUrl = 'http://localhost:3000/avatars/' + this.user.avatar;
    } else { this.avatarUrl = 'https://material.angular.io/assets/img/examples/shiba2.jpg'; }
  }

  ngOnInit() {
  }

  showEdit(avatarUrl) {
    this.dialog.open(EditorDialogComponent, {
      data: { url: avatarUrl },
      height: '100%',
      width: '800px',
    })
      .afterClosed()
      .subscribe(result => console.log(result))
    ;
  }

}

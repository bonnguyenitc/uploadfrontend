import { Component } from '@angular/core';
import {UserService} from './user.service';
import {AuthGuardService} from './auth-guard.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private userService: UserService, private  auth: AuthGuardService, private router: Router) {
    // const token = this.userService.getToken();
    // if (!this.userService.isLoggedIn()) {
    //   return;
    // }
    // const returnUrl = localStorage.getItem('returnUrl') || '/dashboard';
    // if (!returnUrl) {
    //   return;
    // }
    // localStorage.removeItem('returnUrl');
    // this.router.navigateByUrl(returnUrl);
  }
}

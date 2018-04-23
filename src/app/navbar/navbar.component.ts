import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
  }

  logOut() {
      localStorage.removeItem('token');
      return this.router.navigate(['/']);
  }

  isLogged() {
    // if (this.userService.getToken()) { return true; }
    // return false;
    return this.userService.isLoggedIn();
  }

}

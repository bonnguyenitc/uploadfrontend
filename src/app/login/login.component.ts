import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  auth: any;
  showLogin = true;
  constructor(private userService: UserService, private router: Router) {
    if (this.userService.isLoggedIn())
      router.navigate(['/dashboard']);
  }

  ngOnInit() {
  }

  submitForm(f) {
    // this.userService.create(f).subscribe(user => {
    //   console.log(user);
    // });
    this.userService.login(f).subscribe(result => {
        this.auth = result;
        if (this.auth.auth === false) { return this.showLogin = false; }
        this.showLogin = true;
        localStorage.setItem('token', this.auth.message);
        let returnUrl = localStorage.getItem('returnUrl');
        if (returnUrl && returnUrl !== '/' ) { return this.router.navigate([returnUrl]); }
        return this.router.navigate(['/dashboard']);
    });
  }

  isLoggedIn() {
    if (!this.userService.isLoggedIn()) { return this.router.navigate(['']); }
    return this.router.navigate(['/dashboard']);
  }
}

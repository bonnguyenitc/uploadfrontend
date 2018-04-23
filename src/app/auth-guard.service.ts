import { Injectable } from '@angular/core';
import {UserService} from './user.service';
import {Router, CanActivate, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private userService: UserService, private router: Router) { }

  canActivate(route, state: RouterStateSnapshot) {
    // const token = this.userService.getToken();
    if (this.userService.isLoggedIn()) { return true; }
    this.router.navigate(['/'], { queryParams: { returnUrl: state.url}});
    return false;
  }
}

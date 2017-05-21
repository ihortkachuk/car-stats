import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { AuthService } from '../../services/authService';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router,
              private authService: AuthService) { }

  canActivate() {
    if (this.authService.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }

  canActivateChild() {
    console.log('checking child route access');
    return true;
  }
}

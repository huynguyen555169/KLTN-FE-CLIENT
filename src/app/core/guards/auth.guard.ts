import { AuthenticationService } from './../authentication/authentication';
// An angular route guard that's used to prevent unauthenticated users from accessing restricted routes

import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
  ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser) {
      // if (route.data.isAdminRequire) {
      //   this.userManService.getUserRole().subscribe(res => {
      //     this.headerService.fullName.next(res.fullName);
      //     this.headerService.roleAccount.next(!res.isFlag);
      //     if (!!res.isFlag) {
      //       this.router.navigate(['/']);
      //       return true;
      //     }
      //     return false;
      //   });
      // }
      return true;
    }
    // not logged in so redirect to login page with the return url
    this.router.navigate([`/login`]);
    return false;
  }
}

// Use to login/logout of the Angular app
// Allows access the currently logged in user

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
// import { UserModel } from '@app/builds/models/userModel';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
// import { UIPATH, apiPathConstant } from '@app/configs/app-constants';
// import { SpinnerService } from '@app/commonModules/spinner-service/spinner.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  public currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>; // Subcribe to get immediately

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser1')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  // Get when needed
  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  // Login and receive user info and token if success
  login(email: string, password: string) {
    // Next value for currentUserSubject and store local when login successfully
    return this.http.post<any>(`${environment.baseUrl}customer/login`, {
      username: email,
      password: password
    });
  }

  logout() {
    // this.spinnerService.show();
    if (this.currentUserValue) {
      this.http
        .post<any>(`${environment.baseUrl}/oauth/logout`, {
          access_token: this.currentUserValue.access_token,
          refresh_token: this.currentUserValue.refresh_token,
          username: this.currentUserValue.email
        })
        .subscribe(
          () => {
            this.handleAfterLogoutResponse();
          },
          error => {
            this.handleAfterLogoutResponse();
          }
        );
    }
  }

  handleAfterLogoutResponse() {
    //  this.spinnerService.hide();
    localStorage.removeItem('currentUser1');
    this.currentUserSubject.next(null);
    this.router.navigate([`/login`]);
  }

  refreshAccessToken() {
    return this.http.post<any>(`${environment.baseUrl}/oauth/token/refresh`, {
      username: this.currentUserValue.username,
      refresh_token: this.currentUserValue.refresh_token
    });
  }

  // forgotPassword(email) {
  //   return this.http.post<any>(`${environment.baseUrl}/${apiPathConstant.authController.FORGOT_PASSWORD}`, {
  //     username: email
  //   });
  // }
}

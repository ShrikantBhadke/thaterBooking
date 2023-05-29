import { Injectable } from '@angular/core';
import { UserDataService } from './user-data.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isUserLog: boolean = false;

  constructor(
    private userDataService: UserDataService,
    private _router: Router
  ) {}

  isAuthenticate(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.isUserLog = localStorage.getItem('email') ? true : false;
      resolve(this.isUserLog);
    });
  }

  isUserlogIn(email: string, password: string) {
    this.userDataService.getUserData().subscribe((user) => {
      console.log(user);
      let singleuser = user.find(
        (obj: any) => obj.email == email && obj.password == password
      );
      if (singleuser) {
        this.isUserLog = true;
        this._router.navigate(['theater']);
        localStorage.setItem('email', email);
      } else {
        alert('Please Enter Valid Email Or Password.....!');
      }
    });
  }

  isUserLogOut() {
    this.isUserLog = false;
    localStorage.removeItem('email');
    this._router.navigate(['/']);
  }
}

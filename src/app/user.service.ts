import { Injectable } from '@angular/core';
import { LoginResponse, User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userDetails: User[] = [ {userid : 'abc@media.com',password:'abc123',username:'tom'}, {userid : 'def@media.com',password:'def123',username:'dick'}];
  logedInUserDetails: User = {userid: '', password: '', username: ''};
  isLoggedIn = false;

  constructor() { }

  login(enteredDetails: {userName: string, password: string}): LoginResponse  {
    this.clearUserSession();
    const userDetails = this.userDetails.find((user)=> {
      return user.userid === enteredDetails.userName;
    });
    if (userDetails) {
      if (userDetails.password === enteredDetails.password) {
        this.logedInUserDetails = userDetails;
        this.isLoggedIn = true;
        return {loginSuccess: true, message: 'Login Success'};
      } else {
        return {loginSuccess: false, message: 'Please Enter Correct Password'};
      }
    } else {
      return {loginSuccess: false, message: 'Please Enter Correct User Name and Password'};
    } 
  }

  clearUserSession() {
    this.logedInUserDetails = {userid: '', password: '', username: ''};
    this.isLoggedIn = false;
  }

  signOut() {
    this.clearUserSession();
  }


}

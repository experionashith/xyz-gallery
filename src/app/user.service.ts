import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse, User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userDetails: User[] = [ {userid : 'abc@media.com',password:'abc123',username:'tom'}, {userid : 'def@media.com',password:'def123',username:'dick'}];
  logedInUserDetails: User = {userid: '', password: '', username: ''};
  isLoggedIn = false;

  constructor(private httpClient: HttpClient) { }

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

  callSampleApi() {
    this.httpClient.get('https://api.plos.org/search?q=title:DNA').subscribe((data) => {
      console.log(data);
    })
  }

  callSampleApiObs() {
    return this.httpClient.get('https://api.plos.org/search?q=title:DNA');
  }

  clearUserSession() {
    this.logedInUserDetails = {userid: '', password: '', username: ''};
    this.isLoggedIn = false;
  }

  signOut() {
    this.clearUserSession();
    
  }


}

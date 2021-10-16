import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  message = '';

  loginForm = new FormGroup({
    userName: new FormControl('', [
      Validators.required,
      Validators.email]),
    password: new FormControl('', [
      Validators.required]),
  }); 

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private userService: UserService) {}

    onCloseClick(): void {
    this.dialogRef.close();
  }

  doLogin() {

    const loginResponse = this.userService.login(this.loginForm.value);
    if (loginResponse.loginSuccess) {
      this.dialogRef.close();
    } else {
      this.message = loginResponse.message;
    }
  }

}

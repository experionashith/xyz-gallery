import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {
  constructor(public dialog: MatDialog, public userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  openSignInModal() {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '300px',
      data: {name: 'achu', animal: 'madan'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

  signOut() {
    this.userService.signOut();
    this.router.navigate(['/']);
  }

}

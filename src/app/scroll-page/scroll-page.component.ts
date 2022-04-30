import { Component, HostListener, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-scroll-page',
  templateUrl: './scroll-page.component.html',
  styleUrls: ['./scroll-page.component.css']
})
export class ScrollPageComponent implements OnInit {
dispalyPopup: boolean;
  constructor(public userService: UserService) { }

  ngOnInit(): void {

  }

  // @HostListener('window:scroll', ['$event']) 
  //   scrollHandler(event: any) {
  //     console.log("Scroll Event"+ event);
  //   }

  buttonClicked() {
    this.dispalyPopup = true;
    const source = timer(3000);
    const subscribe = source.subscribe(val => this.dispalyPopup = false);  
  }

  closePopup() {
    this.dispalyPopup = false;
  }



}

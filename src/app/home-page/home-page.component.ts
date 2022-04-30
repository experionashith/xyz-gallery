import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GalleryService } from '../gallery.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  gallery$: Observable<any>;
  constructor(public galleryService: GalleryService, public userService: UserService) { }

  ngOnInit(): void {
    this.gallery$ = this.galleryService.getGalleryImages();
    this.userService.callSampleApi();
  }

}

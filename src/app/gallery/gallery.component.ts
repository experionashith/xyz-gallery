import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GalleryService } from '../gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  gallery$: Observable<any>;
  constructor(public galleryService: GalleryService) { }

  ngOnInit(): void {
    this.gallery$ = this.galleryService.getGalleryImages();
  }



}

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
  totalAngularPackages: any;
  constructor(public galleryService: GalleryService) { }

  ngOnInit(): void {
    this.gallery$ = this.galleryService.getGalleryImages();

    this.galleryService.sampleGetCall().subscribe(data => {
      this.totalAngularPackages = data;
      console.log(data);
  })
  }



}

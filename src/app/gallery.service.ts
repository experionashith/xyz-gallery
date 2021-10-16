import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  galleryImages = [
    {
      name: 'Business, Bar, Restaurant, Shield',
      url: 'https://cdn.pixabay.com/photo/2020/08/09/11/31/business-5475283__340.jpg',
      isPrivate: true
  },
  {
    name: 'Dewdrop, Spider Web, Cobwebs, Droplets',
    url: 'https://cdn.pixabay.com/photo/2019/12/19/14/52/dewdrop-4706329__340.jpg',
    isPrivate: true
},
{
  name: 'Autumn Colors, Fall, Red Foliage, Branch',
  url: 'https://cdn.pixabay.com/photo/2020/11/02/13/24/autumn-colours-5706651__340.jpg',
  isPrivate: true
},
{
  name: 'Red Thread, Cotton Thread, Needle',
  url: 'https://cdn.pixabay.com/photo/2020/09/06/08/00/red-thread-5548304__340.jpg',
  isPrivate: true
},
{
  name: 'Toddler, Guitar, Mother, Red, Love, Mom',
  url: 'https://cdn.pixabay.com/photo/2020/05/13/09/36/toddler-5166749__340.jpg',
  isPrivate: true
},
{
  name: 'Flowers, Bee, Pollination, Insect',
  url: 'https://cdn.pixabay.com/photo/2021/09/29/06/19/flowers-6666411__340.jpg',
  isPrivate: true
},
{
  name: 'Cat, Black, White, Animal, Feline, Pet',
  url: 'https://cdn.pixabay.com/photo/2020/05/12/11/39/cat-5162540__340.jpg',
  isPrivate: true
},
{
  name: 'Woods, Forest, Trees, Trunks, Branches',
  url: 'https://cdn.pixabay.com/photo/2021/07/23/14/13/woods-6487408__340.jpg',
  isPrivate: true
},
]
  constructor() { }
}



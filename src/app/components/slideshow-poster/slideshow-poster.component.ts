import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {

  @Input() movies: Movie[] = [];
  
  slideOpts = {
    slidesPerView: 3.3,
    loadPrevNext: true,
    spaceBetween: 0.5,
    freeMode: true
  }

  constructor() { }

  ngOnInit() {}

}

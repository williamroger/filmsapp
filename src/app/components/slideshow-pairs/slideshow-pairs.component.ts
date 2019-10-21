import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Movie } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-slideshow-pairs',
  templateUrl: './slideshow-pairs.component.html',
  styleUrls: ['./slideshow-pairs.component.scss'],
})
export class SlideshowPairsComponent implements OnInit {

  @Input() movies: Movie[] = [];
  @Output() loadMore = new EventEmitter();

  slideOpts = {
    slidesPerView: 3.3,
    loadPrevNext: true,
    spaceBetween: 0.5,
    freeMode: true
  }

  constructor() { }

  ngOnInit() {}

  onClick() {
    this.loadMore.emit();
  }
}

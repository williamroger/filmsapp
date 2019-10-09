import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Film } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  
  recentMovies: Film[] = [];
  slideOpts = {
    slidesPerView: 1.2,
    loadPrevNext: true,
    spaceBetween: 0.5,
    freeMode: true
  }

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.moviesService.getFeature()
      .subscribe(resp => {
        console.log('Resp ', resp);
        this.recentMovies = resp.results;
      });
  }
}

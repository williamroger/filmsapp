import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  
  recentMovies: Movie[] = [];
  popular: Movie[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.moviesService.getFeature()
      .subscribe(resp => {
        // console.log('Resp ', resp);
        this.recentMovies = resp.results;
      });
    
    this.getPopular();
  }

  loadMore() {
    this.getPopular();
  }

  getPopular() {
    this.moviesService.getPopular()
      .subscribe(resp => {
        const arrTemp = [...this.popular, ...resp.results];
        this.popular = arrTemp;
      });
  }
}

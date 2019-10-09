import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseMDB } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getFeature() {
    return this.http.get<ResponseMDB>(`https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2019-09-01&primary_release_date.lte=2019-10-09&api_key=b865a13f87207843ebf68c97ed808500&language=pt&include_image_language=pt`)
  }
}

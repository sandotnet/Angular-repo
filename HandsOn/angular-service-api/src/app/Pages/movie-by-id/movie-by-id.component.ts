import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Movie } from '../../Models/movie';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-movie-by-id',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './movie-by-id.component.html',
  styleUrl: './movie-by-id.component.css',
})
export class MovieByIdComponent {
  movieId?: number = 0;
  movie: Movie;
  errMsg: string = '';
  isMovieExist: boolean = false;
  constructor(
    private http: HttpClient,
    private roter: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.movie = new Movie();
    //route parameter mid is assiged to movieId
    this.activateRoute.params.subscribe((p) => (this.movieId = p['mid']));
    console.log(this.movieId);
    this.search();
  }
  search() {
    this.http
      .get<Movie>(
        'http://localhost:64257/api/Movie/GetMovieById/' + this.movieId
      )
      .subscribe((response) => {
        console.log(response);
        if (response != null) {
          this.movie = response;
          this.isMovieExist = true;
          this.errMsg = '';
        } else {
          this.errMsg = 'Invalid Movie Id';
          this.isMovieExist = false;
        }
      });
  }
  edit() {
    this.http
      .put('http://localhost:64257/api/Movie/EditMovie', this.movie)
      .subscribe((response) => {
        console.log(response);
      });
    this.roter.navigateByUrl('getall');
  }
  delete() {
    this.movieId = this.movie.movieId;
    this.http
      .delete('http://localhost:64257/api/Movie/DeleteMovie/' + this.movieId)
      .subscribe((response) => {
        console.log(response);
      });
    this.roter.navigateByUrl('getall');
  }
}

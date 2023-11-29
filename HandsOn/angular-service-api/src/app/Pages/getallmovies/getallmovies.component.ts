import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Movie } from '../../Models/movie';
@Component({
  selector: 'app-getallmovies',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './getallmovies.component.html',
  styleUrl: './getallmovies.component.css',
})
export class GetallmoviesComponent {
  movies: Movie[] = [];
  constructor(private http: HttpClient) {
    this.getAllMovies();
  }
  getAllMovies() {
    this.http
      .get<Movie[]>('http://localhost:64257/api/Movie/GetAllMovies')
      .subscribe((response) => {
        this.movies = response;
        console.log(this.movies);
      });
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Movie } from '../../Models/movie';
import { Router } from '@angular/router';
@Component({
  selector: 'app-getallmovies',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './getallmovies.component.html',
  styleUrl: './getallmovies.component.css',
})
export class GetallmoviesComponent {
  movies: Movie[] = [];
  constructor(private http: HttpClient, private router: Router) {
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
  delete(id: any) {
    console.log(id);
    this.http
      .delete('http://localhost:64257/api/Movie/DeleteMovie/' + id)
      .subscribe(
        (response) => {
          console.log(response);
        },
        (err) => {
          console.log(err);
        }
      );
    this.getAllMovies(); //to load the table
    location.reload(); //to reload the page
  }
  getId(id: any) {
    this.router.navigateByUrl('search/' + id);
  }
}

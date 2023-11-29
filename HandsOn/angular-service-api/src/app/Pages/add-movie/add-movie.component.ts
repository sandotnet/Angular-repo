import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Movie } from '../../Models/movie';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-movie',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './add-movie.component.html',
  styleUrl: './add-movie.component.css',
})
export class AddMovieComponent {
  movie: Movie;
  constructor(private http: HttpClient, private router: Router) {
    this.movie = new Movie();
  }
  addMovie() {
    this.http
      .post('http://localhost:64257/api/Movie/AddMovie', this.movie)
      .subscribe((response) => {
        console.log(response);
      });
    this.router.navigateByUrl('getall'); //navigate to GetAllMovie component
  }
}

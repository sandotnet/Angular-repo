import { Routes } from '@angular/router';
import { GetallmoviesComponent } from './Pages/getallmovies/getallmovies.component';
import { AddMovieComponent } from './Pages/add-movie/add-movie.component';
import { MovieByIdComponent } from './Pages/movie-by-id/movie-by-id.component';

export const routes: Routes = [
  { path: 'getall', component: GetallmoviesComponent },
  { path: 'add', component: AddMovieComponent },
  { path: 'search/:mid', component: MovieByIdComponent },
];

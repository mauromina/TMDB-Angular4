import { Routes } from '@angular/router';
import { PopularActorsComponent} from './components/popular-actors/popular-actors.component';
import { PopularMoviesComponent} from './components/popular-movies/popular-movies.component';
import { MovieComponent} from './components/movie/movie.component';
import { MultiCardComponent} from './components/multi-card/multi-card.component';
import { TvSeriesComponent } from './components/tv-series/tv-series.component';


import {HomeComponent} from './components/home/home.component';

export const  ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'actors',  component: PopularActorsComponent },
  { path: 'movies/:filter',  component: PopularMoviesComponent },
  { path: 'movie/:id', component: MovieComponent },
  { path: 'serie/:id', component: TvSeriesComponent },
  { path: 'profile/:id', component: MultiCardComponent },
  { path: 'multi/:id', component: MultiCardComponent },
  { path: 'movies1/:filter',  component: PopularMoviesComponent },
  { path: 'movies2/:filter',  component: PopularMoviesComponent },
  { path: 'movies3/:filter',  component: PopularMoviesComponent },
  { path: 'movies4/serie/:id',  component: PopularMoviesComponent },
  { path: '**', redirectTo: 'home' }
];

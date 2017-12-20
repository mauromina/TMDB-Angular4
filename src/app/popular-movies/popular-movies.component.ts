import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../tmdb.service';
import { HelperDefault } from '../helper-default';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css']
})
export class PopularMoviesComponent implements OnInit {

  private movies = []

  constructor(
    private tmdbService: TmdbService,
    private tmdbHelper: HelperDefault,
  ) { }

  ngOnInit() {
    this.tmdbService.getPopularMovies()
      .subscribe(movies => {
        this.movies = movies.results.slice(0, 9);
      });
  }

  goMovie(id: number): void{
    /*this.router.navigate(['/movie', id]);*/
  }

}

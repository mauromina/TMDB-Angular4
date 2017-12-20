import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../tmdb.service';
import { HelperDefault } from '../helper-default';
import { Router} from '@angular/router';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css']
})
export class PopularMoviesComponent implements OnInit {

  private movies = [];
  private title = 'Popular Movies';

  constructor(
    private tmdbService: TmdbService,
    private tmdbHelper: HelperDefault,
    private router: Router
  ) { }

  ngOnInit() {
    this.tmdbService.getPopularMovies()
      .subscribe(movies => {
        this.movies = movies.results.slice(0, 12);
      });
  }

  goMovie(id: number): void{
    this.router.navigate(['/movie', id]);
  }

}

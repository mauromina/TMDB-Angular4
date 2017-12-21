import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../../services/tmdb.service';
import { HelperDefault } from '../../services/helper-default';
import { Router} from '@angular/router';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';
import * as _ from 'lodash';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css']
})
export class PopularMoviesComponent implements OnInit {

  private movies = new BehaviorSubject([]);
  private title = 'Popular Movies';
  private pageCurrent: number;
  private finished = false ; // boolean when end of database is reached

  constructor(
    private tmdbService: TmdbService,
    private tmdbHelper: HelperDefault,
    private router: Router
  ) {this.pageCurrent = 1;
  }

  ngOnInit() {
  this.getMovies();
  }

  goMovie(id: number): void{
    this.router.navigate(['/movie', id]);
  }
getMovies() {
  this.tmdbService.getPopularMovies(this.pageCurrent.toString())
    .subscribe(movies => {
      const currentMovies = this.movies.getValue();
      const  newMovies = movies.results.slice(0, 24);
      this.movies.next( _.concat(currentMovies, newMovies));

    });
  // Cambio de pagina para el infinte scroll
  this.pageCurrent += 1;
}

  onScroll () {
    this.getMovies();
  }

}

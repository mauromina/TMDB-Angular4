import { Component, OnInit, Input, OnChanges} from '@angular/core';
import { TmdbService } from '../../services/tmdb.service';
import { HelperDefault } from '../../services/helper-default';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';
import * as _ from 'lodash';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css']
})
export class PopularMoviesComponent implements OnInit, OnChanges  {
  @Input() filter: string;
  @Input() id: string;
  private movies = new BehaviorSubject([]);
  private title: string;
  private pageCurrent: number;
  private finished = false ; // boolean when end of database is reached
  private subscription: Subscription;
  private filtroOld: string;

  constructor(
    private tmdbService: TmdbService,
    private tmdbHelper: HelperDefault,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.pageCurrent = 1;
    this.title = 'Popular Movies';
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe((param: any) => {
      if (!this.filter) this.filter = param['filter'];
      this.getMovies();
    });

  }

  goMovie(id: number): void {
    this.router.navigate(['/movie', id]);
  }
getMoviesPopular(): void {
  this.tmdbService.getPopularMovies(this.pageCurrent.toString())
    .subscribe(movies => {
      const currentMovies = this.movies.getValue();
      const  newMovies = movies.results.slice(0, 24);
      this.movies.next( _.concat(currentMovies, newMovies));

    });
  // Cambio de pagina para el infinte scroll
  this.pageCurrent += 1;
  this.title = 'Popular Movies';
}
  getMoviesTop(): void {
    this.tmdbService.getTopMovies(this.pageCurrent.toString())
      .subscribe(movies => {
        const currentMovies = this.movies.getValue();
        const  newMovies = movies.results.slice(0, 24);
        this.movies.next( _.concat(currentMovies, newMovies));

      });
    // Cambio de pagina para el infinte scroll
    this.pageCurrent += 1;
    this.title = 'Top Movies';
  }

  getMoviesNowPlayingMovies(): void {
    this.tmdbService.getNowplayingMovies(this.pageCurrent.toString())
      .subscribe(movies => {
        const currentMovies = this.movies.getValue();
        const  newMovies = movies.results.slice(0, 24);
        this.movies.next( _.concat(currentMovies, newMovies));

      });
    // Cambio de pagina para el infinte scroll
    this.pageCurrent += 1;
    this.title = 'Now Playing Movies';
  }

  getMoviesUpcomingMovies(): void {
    this.tmdbService.getUpcomingMovies(this.pageCurrent.toString())
      .subscribe(movies => {
        const currentMovies = this.movies.getValue();
        const  newMovies = movies.results.slice(0, 24);
        this.movies.next( _.concat(currentMovies, newMovies));

      });
    // Cambio de pagina para el infinte scroll
    this.pageCurrent += 1;
    this.title = 'Upcoming Movies';
  }

  onScroll (): void {
    this.getMovies();
  }
/*Detecta cambios en los filtros*/

  getMovies(): void {
    switch (this.filter) {
      case 'popular':
        this.getMoviesPopular();
        break;
      case 'top':
        this.getMoviesTop();
        break;
      case 'nowplaying':
        this.getMoviesNowPlayingMovies();
        break;
      case 'upcoming':
        this.getMoviesUpcomingMovies();
        break;
      default:
        this.getMoviesPopular();
    }
  }

  ngOnChanges(): void {
    this.filter = '';
    this.ngOnInit();
  }
}

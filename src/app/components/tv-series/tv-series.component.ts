import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../../services/tmdb.service';
import { HelperDefault } from '../../services/helper-default';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';
import * as _ from 'lodash';

@Component({
  selector: 'app-tv-series',
  templateUrl: './tv-series.component.html',
  styleUrls: ['./tv-series.component.css']
})
export class TvSeriesComponent implements OnInit {
  private serie: any;
  private image: string;
  private maxPopularity = 5;
  private subscription: Subscription;
  private movies = new BehaviorSubject([]);
  private title: string;
  private pageCurrent: number;
  private idLocal: string;

  constructor(
    private tmdbService: TmdbService,
    private tmdbHelper: HelperDefault,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe((param: any) => {
      let id = param['id'];
      this.idLocal =  param['id'];

      this.tmdbService.getDetailTv(id)
        .subscribe(serie => {
          this.serie = serie;
        });
    });
  }
  /**Metodos encargados de redireccionar al usuario a otro componente
   * @param {id:number} identificador de un elemento dado para ser detallado
   * en el componente siguiente
   * @return {:void} */

  goMovie(id: number): void {
    this.router.navigate(['/serie', id]);
  }
  getMoviesSimilarTv(): void {
    this.tmdbService.getSimilarTv(this.idLocal , this.pageCurrent.toString() )
      .subscribe(movies => {
        const currentMovies = this.movies.getValue();
        const  newMovies = movies.results.slice(0, 24);
        this.movies.next( _.concat(currentMovies, newMovies));

      });
    // Cambio de pagina para el infinte scroll
    this.pageCurrent += 1;
    this.title = 'Recomend Movies';
  }
  onScroll (): void {
    this.getMovies();
  }
  getMovies(): void {
    this.getMoviesSimilarTv();
  }
}

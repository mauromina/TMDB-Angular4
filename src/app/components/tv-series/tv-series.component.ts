import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../../services/tmdb.service';
import { HelperDefault } from '../../services/helper-default';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute, Params } from '@angular/router';

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

  constructor(
    private tmdbService: TmdbService,
    private tmdbHelper: HelperDefault,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe((param: any) => {
      let id = param['id'];

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
    this.router.navigate(['/movie', id]);
  }

}

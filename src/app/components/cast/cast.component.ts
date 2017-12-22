import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { TmdbService } from '../../services/tmdb.service';
import { HelperDefault } from '../../services/helper-default';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.css']
})
export class CastComponent implements OnInit {

  @Input() private id: string;
  private movies = [];

  constructor(
    private tmdbService: TmdbService,
    private tmdbHelper: HelperDefault,
    private router: Router
  ) { }

  ngOnInit() {
    this.tmdbService.getMovieCreditsPerson(this.id)
      .subscribe(movies => {
        this.movies = movies.cast.slice(0, 8);
      });
  }

  ngOnChanges(): void {
    this.ngOnInit();
  }

  /**Ordenamiento de peliculas segun la fecha de lanzamiento
   * @return {:void} */

  /**Metodo encargado de obtener el anio de una pelicula determinada
   * @param {movie:any} pelicula extraida de la api de tmdb
   * @return {:string} anio de lanzamiento de la pelicula*/
  getYear(movie: any): string {
    if (movie.release_date) return `(${movie.release_date.split('-')[0]})`;
    return '';
  }

  /**Metodos encargados de redireccionar al usuario a otro componente
   * @param {id:number} identificador de un elemento dado para ser detallado
   * en el componente siguiente
   * @return {:void} */
  goMovie(id: number): void {
    this.router.navigate(['/movie', id]);
  }

}

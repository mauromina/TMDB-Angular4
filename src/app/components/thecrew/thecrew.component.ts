import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { TmdbService } from '../../services/tmdb.service';
import { HelperDefault } from '../../services/helper-default';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-thecrew',
  templateUrl: './thecrew.component.html',
  styleUrls: ['./thecrew.component.css']
})
export class ThecrewComponent implements OnInit {

  @Input() private id:string;
  private movies = [];

  constructor(
    private tmdbService: TmdbService,
    private tmdbHelper: HelperDefault,
    private router: Router
  ) { }

  ngOnInit() {
    this.tmdbService.getMovieCreditsPerson(this.id)
      .subscribe(movies => {
        this.movies = movies.crew.result;

      });
  }

  ngOnChanges(): any{
    this.ngOnInit();
  }
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

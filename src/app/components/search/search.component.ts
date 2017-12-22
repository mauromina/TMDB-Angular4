import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../../services/tmdb.service';
import { HelperDefault } from '../../services/helper-default';
import { Router} from '@angular/router';
import { Observable, Subscription  } from 'rxjs/Rx';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private persons: any;
  private query: string;
  private timer: any;

  constructor(
    private tmdbService: TmdbService,
    private router: Router,
    private tmdbHelper: HelperDefault
  ) { }

  ngOnInit() {
  }

  /**Metodo encargado de generar la consulta con la informacion
   * del actor otorgada
   * @param {query:string} cadena que almacena la consult
   * @return {:void} */
  search(query: string): void {
    this.tmdbService.getSearchMulti(query)
      .subscribe(persons => {
        this.persons = persons.results.slice(0, 5);
      });
  }

  /**Metodo encargado de actualizar la lista de resultados despues
   * de determinado tiempo de que se haya terminado de escribir
   * @return {:void} */
  queryTyping(): void {
    this.persons = [];
    this.timer = Observable.timer(500);
    this.timer.subscribe(() => {
      if ( this.query ) this.search(this.query);
    });
  }

  /**Metodo encargado de limpiar el input de la busqueda y desaparecer
   * de la vista la lista de resultados
   * @return {:void} */
  clear(): void {
    this.persons = [];
    this.query = '';
  }

  /**Metodos encargados de redireccionar al usuario a otro componente
   * @param {id:number} identificador de un elemento dado para ser detallado
   * en el componente siguiente
   * @return {:void} */
  goHome(): void {
    this.router.navigate(['']);
  }

  goProfile(id: number, selecctor: string): void {
    this.clear();
    console.log(selecctor);
    if (selecctor == 'person') {
      this.router.navigate(['/multi', id]);
    }
    if (selecctor == 'movie') {
      this.router.navigate(['/movie', id]);
    }
    if (selecctor == 'tv') {
      this.router.navigate(['/serie', id]);
    }
  }

  goPopularPersons(): void {
    this.router.navigate(['/persons', 'popular']);
  }

  goPopularMovies(): void {
    this.router.navigate(['/movies', 'popular']);
  }

  goTopMovies(): void {
    this.router.navigate(['/movies1', 'top']);
  }

  goUpComingMovies(): void {
    this.router.navigate(['/movies2', 'upcoming']);
  }

  goNowPlaying(): void {
    this.router.navigate(['/movies3', 'nowplaying']);

  }
  goPopularsActors(){
    this.router.navigate(['/actors']);
  }

}

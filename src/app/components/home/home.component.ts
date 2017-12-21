import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../../services/tmdb.service';
import { HelperDefault } from '../../services/helper-default';
import { Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private movies: any;
  private persons: any;
  private titleMovie: string;
  private titlePerson: string;

  constructor(
    private tmdbService: TmdbService,
    private tmdbHelper: HelperDefault,
    private router: Router
  ) {
    this.titleMovie = 'Popular Movies';
    this.titlePerson = 'Popular Actors';
  }

  ngOnInit() {
    this.tmdbService.getPopularMovies('1')
      .subscribe(movies => {
        this.movies = movies.results.slice(0, 4);

      });
    this.tmdbService.getPopularPersons('1')
      .subscribe(persons => {
        this.persons = persons.results.slice(0, 4);
      });
  }

  goMovie(id: number): void{
    this.router.navigate(['/movie', id]);
  }
  /**Metodos encargados de redireccionar al usuario a otro componente
   * @param {id:number} identificador de un elemento dado para ser detallado
   * en el componente siguiente
   * @return {:void} */
  goProfile(id: number): void{
    this.router.navigate(['/profile', id]);
  }

}

import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../../services/tmdb.service';
import { HelperDefault } from '../../services/helper-default';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-multi-card',
  templateUrl: './multi-card.component.html',
  styleUrls: ['./multi-card.component.css']
})
export class MultiCardComponent implements OnInit {

  private person: any;
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

      this.tmdbService.getDetailPerson(id)
        .subscribe(person => {
          this.person = person;
          this.rewrite();
        });

      this.tmdbService.getImagesPerson(id)
        .subscribe(imagePerson => {

          if (imagePerson.profiles) {
            switch(imagePerson.profiles.length) {
              case 0:
                this.image = null;
                break;
              case 1:
                this.image = imagePerson.profiles[0].file_path;
                break;
              default:
                this.image = imagePerson.profiles[1].file_path;
                break;
            }
          }
        });
    });
  }

  /**Metodo encargado de reescribir la informacion de un actor para
   * hacerla mas amigable al usuario
   * @return {:void} */
  rewrite(): void {
    if (!this.person.deathday) this.person.deathda = 'present';
    if (this.person.popularity) this.person.popularity = this.person.popularity / 10;
    switch (this.person.gender) {
      case 0:
        this.person.gender = 'Male';
        break;
      case 1:
        this.person.gender = 'Female';
        break;
      case 2:
        this.person.gender = 'Male';
        break;
      default:
        this.person.gender = 'Unknow';
        break;
    }
  }

  /**Metodos encargados de redireccionar al usuario a otro componente
   * @param {id:number} identificador de un elemento dado para ser detallado
   * en el componente siguiente
   * @return {:void} */
  goMovie(id: number): void{
    this.router.navigate(['/movie', id]);
  }
}

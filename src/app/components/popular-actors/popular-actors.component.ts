import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { TmdbService } from '../../services/tmdb.service';
import { HelperDefault } from '../../services/helper-default';
import { Router} from '@angular/router';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';
import * as _ from 'lodash';

@Component({
  selector: 'app-popular-actors',
  templateUrl: './popular-actors.component.html',
  styleUrls: ['./popular-actors.component.css']
})
export class PopularActorsComponent implements OnInit, OnChanges {
  private persons = new BehaviorSubject([]);
  private title: string;
  private pageCurrent: number;
  private finished = false ; // boolean when end of database is reached
  private filtroOld: string;
  @Input() id: string;

  constructor(  private tmdbService: TmdbService,
                private tmdbHelper: HelperDefault,
                private router: Router) {
    this.pageCurrent = 1;
    this.title = 'Popular Actors';
  }

  ngOnInit() {
  this.getPerson();
  }
  getPerson(): void {

    this.tmdbService.getPopularPersons(this.pageCurrent.toString())
      .subscribe(persons => {
        const currentMovies = this.persons.getValue();
        const  newPersons = persons.results.slice(0, 24);
        this.persons.next( _.concat(currentMovies, newPersons ));
      });
    this.pageCurrent += 1;
  }
  onScroll (): void {
    this.getPerson();
  }
  ngOnChanges(): void {
    this.ngOnInit();
  }

  goProfile(id: number): void{
    this.router.navigate(['/profile', id]);
  }
}

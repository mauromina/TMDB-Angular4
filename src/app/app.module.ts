import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { TmdbService } from './services/tmdb.service';
import { HelperDefault } from './services/helper-default';

import { PopularMoviesComponent } from './components/popular-movies/popular-movies.component';
import { PopularActorsComponent } from './components/popular-actors/popular-actors.component';
import { HomeComponent } from './components/home/home.component';
import { ROUTES } from './app.routing';
import { SearchComponent } from './components/search/search.component';
import { InfiniteScrollModule} from 'ngx-infinite-scroll';
import { PipePipe } from './components/movie/pipe.pipe';
import { MovieComponent } from './components/movie/movie.component';

import { RatingModule} from 'ngx-bootstrap';
import { TabsModule} from 'ngx-bootstrap';

import { CastComponent } from './components/cast/cast.component';
import { ThecrewComponent } from './components/thecrew/thecrew.component';
import { MultiCardComponent } from './components/multi-card/multi-card.component';
import { TvSeriesComponent } from './components/tv-series/tv-series.component';
import { AboutMeeComponent } from './components/about-mee/about-mee.component';

@NgModule({
  declarations: [
    AppComponent,
    PopularMoviesComponent,
    PopularActorsComponent,
    HomeComponent,
    SearchComponent,
    PipePipe,
    MovieComponent,
    CastComponent,
    ThecrewComponent,
    MultiCardComponent,
    TvSeriesComponent,
    AboutMeeComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    InfiniteScrollModule,
    RatingModule,
    TabsModule,
    RouterModule.forRoot(ROUTES, { useHash: false })
  ],
  providers: [
    TmdbService,
    HelperDefault

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

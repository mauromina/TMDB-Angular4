import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { TmdbService } from './Services/tmdb.service';
import { HelperDefault } from './Services/helper-default';

import { PopularMoviesComponent } from './components/popular-movies/popular-movies.component';
import { PopularActorsComponent } from './components/popular-actors/popular-actors.component';
import { HomeComponent } from './components/home/home.component';
import { ROUTES } from './app.routing';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    PopularMoviesComponent,
    PopularActorsComponent,
    HomeComponent,
    SearchComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(ROUTES, { useHash: false })

  ],
  providers: [
    TmdbService,
    HelperDefault

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { TmdbService } from './tmdb.service';
import { HelperDefault } from './helper-default';

import { PopularMoviesComponent } from './popular-movies/popular-movies.component';


@NgModule({
  declarations: [
    AppComponent,
    PopularMoviesComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule

  ],
  providers: [
    TmdbService,
    HelperDefault

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

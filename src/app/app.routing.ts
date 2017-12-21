import { Routes, RouterModule } from '@angular/router';
import { PopularActorsComponent} from './components/popular-actors/popular-actors.component';
import {HomeComponent} from './components/home/home.component';

export const  ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: '**', redirectTo: 'home' }
];
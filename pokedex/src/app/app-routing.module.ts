import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PokemonsListComponent} from './pokemons/pokemons-list/pokemons-list.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {PokemonDetailComponent} from './pokemon-detail/pokemon-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'pokemons', component: PokemonsListComponent },
  { path: 'details/:id', component: PokemonDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

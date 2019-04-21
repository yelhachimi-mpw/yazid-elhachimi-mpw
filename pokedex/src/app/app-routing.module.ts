import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PokemonsListComponent} from './pokemons/pokemons-list/pokemons-list.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {PokemonDetailComponent} from './pokemon-detail/pokemon-detail.component';
import {PokedexComponent} from './pokemons/pokedex/pokedex.component';

const routes: Routes = [
  { path: '', redirectTo: '/pokedex', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'pokemons', component: PokemonsListComponent },
  { path: 'details/:id', component: PokemonDetailComponent },
  { path: 'pokedex', component: PokedexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

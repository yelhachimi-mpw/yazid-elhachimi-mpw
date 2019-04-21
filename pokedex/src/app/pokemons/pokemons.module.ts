import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsListComponent } from './pokemons-list/pokemons-list.component';
import {MatGridListModule, MatIconModule, MatListModule, MatSelectModule, MatSidenavModule} from '@angular/material';
import { HttpClientModule }    from '@angular/common/http';
import { PokemonDetailComponent} from '../pokemon-detail/pokemon-detail.component';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing.module';
import { InfiniteScrollModule} from 'ngx-infinite-scroll';
import { PokedexComponent } from './pokedex/pokedex.component';
import {MatSidenav} from '@angular/material';

@NgModule({
  declarations: [
    PokemonsListComponent,
    PokemonDetailComponent,
    DashboardComponent,
    PokedexComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MatGridListModule,
    InfiniteScrollModule,
    MatSidenavModule,
    MatSelectModule,
    MatIconModule
  ],
})
export class PokemonsModule { }

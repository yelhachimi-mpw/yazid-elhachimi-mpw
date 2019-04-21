import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PokemonsModule} from './pokemons/pokemons.module';
// import {PokemonsListComponent} from './pokemons/pokemons-list/pokemons-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule }    from '@angular/common/http';
// import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import {FormsModule} from '@angular/forms';
import {PokemonsListComponent} from './pokemons/pokemons-list/pokemons-list.component';
import {PokemonDetailComponent} from './pokemon-detail/pokemon-detail.component';
import {MatListModule, MatMenuModule, MatSidenavModule} from '@angular/material';
import {PokedexComponent} from './pokemons/pokedex/pokedex.component';

@NgModule({
  declarations: [
    AppComponent,
    // PokedexComponent,
    // PokemonsListComponent,
    // DashboardComponent,
    // PokemonDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PokemonsModule,
    HttpClientModule,
    FormsModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

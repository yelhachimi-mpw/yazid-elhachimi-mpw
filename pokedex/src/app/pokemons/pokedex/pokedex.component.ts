import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {PageData} from '../../models/PageData';
import {Pokemon} from '../pokemon';
import {PokemonService} from '../pokemon.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {
  sideview = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  pokemonId: number;
  // pokemons: PageData<Pokemon>;

  constructor() { }

  ngOnInit() {
  }
  recuperer(id: number) {
    this.pokemonId = id;
  }
  /*onScroll(): void {
    this.pokemons.offset += 20;
    this.pokemonService.getPokemons(this.pokemons.offset).
    subscribe(pokemons => { this.pokemons.data = this.pokemons.data.concat(pokemons.data); });
  }*/

}

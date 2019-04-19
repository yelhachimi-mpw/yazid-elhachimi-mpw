import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../pokemon';
import {PokemonService} from '../pokemon.service';
import {PageData} from '../../models/PageData';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.scss']
})
export class PokemonsListComponent implements OnInit {
  pokemons: PageData<Pokemon>;

  constructor(private pokemonService: PokemonService) {
  }

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons(): void {
    this.pokemonService.getPokemons().subscribe(pokemons => this.pokemons = pokemons);
  }

  onScroll(): void {
    this.pokemons.offset += 20;
    this.pokemonService.getPokemons(this.pokemons.offset).
    subscribe(pokemons => { this.pokemons.data = this.pokemons.data.concat(pokemons.data); });
  }
}

import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../pokemons/pokemon.service';
import {Pokemon} from '../pokemons/pokemon';
import {PageData} from '../models/PageData';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  pokemons: PageData<Pokemon>;
  constructor(private pokemonService: PokemonService) { }
  ngOnInit() {
    this.getPokemons();
  }
  getPokemons(){
    this.pokemonService.getPokemons().subscribe(pokemons => this.pokemons = pokemons);
  }
}

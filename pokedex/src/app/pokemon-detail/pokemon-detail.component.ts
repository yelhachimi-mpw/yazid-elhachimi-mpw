import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {Pokemon} from '../pokemons/pokemon';
import {PageData} from '../models/PageData';
import {ActivatedRoute} from '@angular/router';
import {PokemonService} from '../pokemons/pokemon.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnChanges {

  pokemon: Pokemon;
  @Input() pokemonId: number;
  constructor(private route: ActivatedRoute,
              private location: Location,
              private pokemonService: PokemonService) { }
  ngOnChanges() {
    this.getPokemon(this.pokemonId);
  }
  getPokemon(id: number): void {
    // const id = this.route.snapshot.params.id;
    console.log(id);
    this.pokemonService.getPokemon(id)
      .subscribe(pokemon => this.pokemon = pokemon);
  }
  goBack(): void {
    this.location.back();
  }
  audioFunction() {
    const audio = new Audio();
    // const id = this.route.snapshot.params.id;
    audio.src = 'assets/assets/audio/' + this.pokemonId + '.mp3';
    audio.load();
    audio.play();
  }

}

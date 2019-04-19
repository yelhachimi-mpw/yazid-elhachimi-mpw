import { Component, OnInit } from '@angular/core';
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
export class PokemonDetailComponent implements OnInit {

  pokemon: Pokemon;
  constructor(private route: ActivatedRoute,
              private location: Location,
              private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getPokemon();
  }
  getPokemon(): void {
    const id = this.route.snapshot.params['id'];
    console.log(id);
    this.pokemonService.getPokemon(id)
      .subscribe(pokemon => this.pokemon = pokemon);
  }
  goBack(): void{
    this.location.back();
  }
  audioFunction() {
    const audio = new Audio();
    const id = this.route.snapshot.params['id'];
    audio.src = 'assets/assets/audio/' + id + '.mp3';
    audio.load();
    audio.play();
  }

}

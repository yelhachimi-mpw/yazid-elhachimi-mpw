import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {PageData} from '../models/PageData';
import {Pokemon} from './pokemon';
import { HttpParams} from '@angular/common/http';
import set = Reflect.set;

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private pokemonUrl = 'http://51.75.122.159:3000/pokemons';
  constructor(private http: HttpClient) { }

  getPokemons(offset = 0): Observable<PageData<Pokemon>> {
    const params = new HttpParams().set('offset', `${offset}`).set('limit', '20');
    return this.http.get<PageData<Pokemon>>(this.pokemonUrl, {params});
  }
  getPokemon(id: number): Observable<Pokemon> {
    const url = 'http://51.75.122.159:3000/pokemons/' + id;
    return this.http.get<Pokemon>(url);
  }
}

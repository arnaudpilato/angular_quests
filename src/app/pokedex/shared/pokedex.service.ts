import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Pokemon} from "./pokemon.model";
import {POKEMONS} from "./pokemon.mock";

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  public pokemons: Pokemon[] = POKEMONS;

  constructor() { }

  public addPokemon(pokemon: Pokemon) {
    return this.pokemons.push(pokemon);
  }
}

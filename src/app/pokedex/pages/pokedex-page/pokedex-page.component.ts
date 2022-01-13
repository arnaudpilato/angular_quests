import { Component, OnInit } from '@angular/core';
import {Pokemon} from "../../shared/pokemon.model";
import {PokedexService} from "../../shared/pokedex.service";

@Component({
  selector: 'app-pokedex-page',
  templateUrl: './pokedex-page.component.html',
  styleUrls: ['./pokedex-page.component.scss']
})
export class PokedexPageComponent implements OnInit {
  public pokemonList: Pokemon[] | undefined;
  public pokemonDetail: Pokemon | undefined;

  constructor(private pokedexService: PokedexService) {
    this.pokemonList = pokedexService.pokemons;
  }

  onPokemonDetail($event: Pokemon) {
    this.pokemonDetail = $event;
  }

  ngOnInit(): void {
  }
}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Pokemon} from "../../shared/pokemon.model";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  @Input()
  public pokemons: Pokemon[] | undefined;

  @Output()
  public pokemonClick: EventEmitter<Pokemon> = new EventEmitter<Pokemon>();

  constructor() { }

  ngOnInit(): void {
  }

  getPokemon($event: Pokemon) {
    this.pokemonClick.emit($event);
  }
}

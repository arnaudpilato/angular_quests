import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from "../../shared/pokemon.model";

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  @Input()
  public pokemon: Pokemon | undefined;

  constructor() { }

  ngOnInit(): void {
  }
}

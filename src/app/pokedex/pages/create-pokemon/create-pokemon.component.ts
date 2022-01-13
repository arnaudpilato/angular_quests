import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PokedexService} from "../../shared/pokedex.service";
import {Pokemon} from "../../shared/pokemon.model";

@Component({
  selector: 'app-create-pokemon',
  templateUrl: './create-pokemon.component.html',
  styleUrls: ['./create-pokemon.component.scss']
})
export class CreatePokemonComponent implements OnInit {
  pokemon: FormGroup = new FormGroup({})
  newPokemon = Pokemon;

  constructor(private fb: FormBuilder, private pokedexService: PokedexService) { }

  ngOnInit(): void {
    this.pokemon = this.fb.group({
      name: ["", Validators.required],
      url: ["", Validators.required],
      description: ["", Validators.required]
    });
  }

  public addPokemon() {
    console.log(this.pokemon.value)
    this.pokedexService.addPokemon(this.pokemon.value);
    this.newPokemon = this.pokemon.value;
  }
}

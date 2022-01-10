import { Component, OnInit } from '@angular/core';
import {Cocktail} from "../cocktail-list/model/cocktail.model";
import {Cocktail2Service} from "../cocktail2.service";

@Component({
  selector: 'app-cocktail-list2',
  templateUrl: './cocktail-list2.component.html',
  styleUrls: ['./cocktail-list2.component.scss']
})
export class CocktailList2Component implements OnInit {
  public cocktails: Cocktail[] = [];
  private service: Cocktail2Service;

  constructor(param_service: Cocktail2Service) {
    this.service = param_service;
  }

  ngOnInit(): void {
    this.service.getCocktails().subscribe(
      (param_cocktails: Cocktail[]) => {
        this.cocktails = param_cocktails;
      }
    )
  }
}

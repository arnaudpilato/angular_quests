import { Injectable } from '@angular/core';
import {Cocktail} from "./cocktail-list/model/cocktail.model";

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  public cocktails: Cocktail[] = [
    new Cocktail('Morito', 3, 'https://cdn.pixabay.com/photo/2017/11/07/21/00/mojito-2928204_1280.jpg'),
    new Cocktail('Ricasaoul', 2, 'https://cdn.pixabay.com/photo/2018/07/13/20/26/table-3536491_1280.jpg'),
    new Cocktail( 'Picon Bière', 4, 'https://cdn.pixabay.com/photo/2018/05/31/16/51/beer-3444480_1280.jpg')
  ];

  getCocktails(): Cocktail[] {
    return this.cocktails;
  }

  constructor() { }
}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Cocktail} from "./cocktail-list/model/cocktail.model";

@Injectable({
  providedIn: 'root'
})
export class Cocktail2Service {
  private service: HttpClient;

  constructor(param_service: HttpClient) {
    this.service = param_service;
  }

  public getCocktails(): Observable<Cocktail[]> {
    const observable: Observable<any> = this.service.get("assets/cocktails.json");
    const treatment = (param_cocktails: any) => {
      return param_cocktails.cocktails as Cocktail[];
    };

    return observable.pipe(map(treatment));
  }
}

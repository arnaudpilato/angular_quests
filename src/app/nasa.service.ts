import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  private service: HttpClient;

  constructor(param_service: HttpClient) {
    this.service = param_service;
  }

  public getImageOfTheDay(): Observable<string> {
    const observable: Observable<any> = this.service.get("https://api.nasa.gov/planetary/apod?api_key=SkkwaOcSULMk3GblaEUwx8GTbgQvwAMsf67xBlPA");
    const treatment = (param_data: any) => {
      return param_data.url as string;
    };

    return observable.pipe(map(treatment));
  }
}

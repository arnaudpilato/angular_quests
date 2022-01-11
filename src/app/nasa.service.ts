import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  private service: HttpClient;
  private url: string = 'https://api.nasa.gov/planetary/apod?'
  private key: string = 'api_key=SkkwaOcSULMk3GblaEUwx8GTbgQvwAMsf67xBlPA';


  constructor(param_service: HttpClient) {
    this.service = param_service;
  }

  public getImageOfTheDay(): Observable<string> {
    const observable: Observable<any> = this.service.get(this.url + this.key);
    const treatment = (param_data: any) => {
      return param_data.url as string;
    };

    return observable.pipe(map(treatment));
  }
}

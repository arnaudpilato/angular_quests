import {Component, OnInit} from '@angular/core';
import {NasaService} from "./nasa.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public nasaImg: string | undefined;
  private service: NasaService;

  constructor(param_service: NasaService) {
    this.service = param_service;
  }

  ngOnInit(): void {
    this.service.getImageOfTheDay().subscribe(
      (param_data: any) => {
        this.nasaImg = param_data;
      }
    )
  }
}

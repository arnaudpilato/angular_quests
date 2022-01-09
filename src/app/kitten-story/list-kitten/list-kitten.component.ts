import { Component, OnInit } from '@angular/core';
import {Kitten} from "../create-kitten/model/kitten.model";

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.scss']
})
export class ListKittenComponent implements OnInit {
  public kittens: Kitten[] = [];
  public userKittens: Kitten[] = [];
  public visibility: boolean = false;
  public iterator: number = 0;

  showInformation($event: number) {
    this.visibility = !this.visibility;
    this.iterator = $event;
  }

  constructor() { }

  ngOnInit(): void {
  }

  adopteKitten($event: number) {
    this.userKittens.push(this.kittens[$event]);
    this.kittens.splice($event, 1);
  }

  onReceiveKitten($event: Kitten) {
    this.kittens.push($event);
  }
}

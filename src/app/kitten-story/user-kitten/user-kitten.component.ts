import {Component, Input, OnInit} from '@angular/core';
import {Kitten} from "../create-kitten/model/kitten.model";

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.scss']
})
export class UserKittenComponent implements OnInit {
  @Input()
  kittens: Kitten[] | undefined;
  public visibility: boolean = false;
  public iterator: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  showInformation($event: number) {
    this.visibility = !this.visibility;
    this.iterator = $event;
  }
}

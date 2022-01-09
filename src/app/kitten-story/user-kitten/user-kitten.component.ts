import {Component, Input, OnInit} from '@angular/core';
import {Kitten} from "../create-kitten/model/kitten.model";

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.scss']
})
export class UserKittenComponent implements OnInit {
  @Input()
  kittens: Kitten[];

  constructor() { }

  ngOnInit(): void {
  }

  public visibility: boolean = false;
  public iterator: number = 0;

  showInformation($event: number) {
    this.visibility = !this.visibility;
    this.iterator = $event;
  }

}

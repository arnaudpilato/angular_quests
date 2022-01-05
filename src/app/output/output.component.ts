import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {
  public onomatopoeias: string[] = [];

  onReceiveNewOnomatopia($event: string) {
    this.onomatopoeias.push($event);
  }

  constructor() { }

  ngOnInit(): void {
  }
}

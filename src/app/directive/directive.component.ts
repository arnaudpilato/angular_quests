import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss']
})
export class DirectiveComponent implements OnInit {
  title = 'Bonjour !';

  isAdmin: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}

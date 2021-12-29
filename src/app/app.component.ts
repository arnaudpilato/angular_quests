import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title1 = 'Pil';
  title = 'Bonjour !';

  isAdmin: boolean = true;

  challenge0 = true;
  challenge1 = true;

  challenge00() {
    this.challenge0 = !this.challenge0
  }

  challenge01() {
    this.challenge1 = !this.challenge1;
  }
}

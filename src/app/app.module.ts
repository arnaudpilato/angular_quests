import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { ShowMoviesDirective } from './show-movies.directive';
import { CustomDirectivesComponent } from './custom-directives/custom-directives.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    ShowMoviesDirective,
    CustomDirectivesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

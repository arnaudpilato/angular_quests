import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { ShowMoviesDirective } from './show-movies.directive';
import { CustomDirectivesComponent } from './custom-directives/custom-directives.component';
import { MenuComponent } from './menu/menu.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

import { ROUTES } from './app.routes';
import { BlockComponent } from './block/block.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    ShowMoviesDirective,
    CustomDirectivesComponent,
    MenuComponent,
    SignUpComponent,
    UserProfileComponent,
    BlockComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

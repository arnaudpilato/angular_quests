import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { ShowMoviesDirective } from './show-movies.directive';
import { CustomDirectivesComponent } from './custom-directives/custom-directives.component';
import { MenuComponent } from './menu/menu.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

import { ROUTES } from './app.routes';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { DeveloperComponent } from './developer/developer.component';
import { SkillComponent } from './developer/skill/skill.component';
import { OutputComponent } from './output/output.component';
import { CreateOnomatopiaComponent } from './output/create-onomatopia/create-onomatopia.component';
import { StartingComponent } from './starting/starting.component';
import { ComponentComponent } from './component/component.component';
import { BlockComponent } from './component/block/block.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    ShowMoviesDirective,
    CustomDirectivesComponent,
    MenuComponent,
    SignUpComponent,
    UserProfileComponent,
    SearchMovieComponent,
    DeveloperComponent,
    SkillComponent,
    OutputComponent,
    CreateOnomatopiaComponent,
    StartingComponent,
    ComponentComponent,
    BlockComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

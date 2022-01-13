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
import { DirectiveComponent } from './directive/directive.component';
import { CreateKittenComponent } from './kitten-story/create-kitten/create-kitten.component';
import { ListKittenComponent } from './kitten-story/list-kitten/list-kitten.component';
import { UserKittenComponent } from './kitten-story/user-kitten/user-kitten.component';
import { KittenStoryComponent } from './kitten-story/kitten-story.component';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { CocktailList2Component } from './cocktail-list2/cocktail-list2.component';
import {HttpClientModule} from "@angular/common/http";
import { NasaComponent } from './nasa/nasa.component';
import { PokedexPageComponent } from './pokedex/pages/pokedex-page/pokedex-page.component';
import { PokemonListComponent } from './pokedex/components/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokedex/components/pokemon-detail/pokemon-detail.component';
import { CreatePokemonComponent } from './pokedex/pages/create-pokemon/create-pokemon.component';

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
    DirectiveComponent,
    CreateKittenComponent,
    ListKittenComponent,
    UserKittenComponent,
    KittenStoryComponent,
    CocktailListComponent,
    CocktailList2Component,
    NasaComponent,
    PokedexPageComponent,
    PokemonListComponent,
    PokemonDetailComponent,
    CreatePokemonComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

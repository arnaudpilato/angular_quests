import { Routes } from '@angular/router';
import {SignUpComponent} from "./sign-up/sign-up.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {CustomDirectivesComponent} from "./custom-directives/custom-directives.component";
import {SearchMovieComponent} from "./search-movie/search-movie.component";
import {DeveloperComponent} from "./developer/developer.component";
import {OutputComponent} from "./output/output.component";
import {StartingComponent} from "./starting/starting.component";
import {ComponentComponent} from "./component/component.component";
import {DirectiveComponent} from "./directive/directive.component";
import {KittenStoryComponent} from "./kitten-story/kitten-story.component";
import {CocktailListComponent} from "./cocktail-list/cocktail-list.component";
import {CocktailList2Component} from "./cocktail-list2/cocktail-list2.component";

const ROUTES: Routes = [
  { path: '', component: UserProfileComponent },
  { path: 'user', component: UserProfileComponent },
  { path: 'starting', component: StartingComponent },
  { path: 'component', component: ComponentComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'directive', component: DirectiveComponent },
  { path: 'custom-directives', component: CustomDirectivesComponent },
  { path: 'reactive-form', component: SearchMovieComponent },
  { path: 'input', component: DeveloperComponent },
  { path: 'output', component: OutputComponent },
  { path: 'kitten-story', component: KittenStoryComponent },
  { path: 'cocktail-list', component: CocktailListComponent },
  { path: 'cocktail-list-2', component: CocktailList2Component }
]

export { ROUTES };

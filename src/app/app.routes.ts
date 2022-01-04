import { Routes } from '@angular/router';
import {SignUpComponent} from "./sign-up/sign-up.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {CustomDirectivesComponent} from "./custom-directives/custom-directives.component";
import {SearchMovieComponent} from "./search-movie/search-movie.component";

const ROUTES: Routes = [
  { path: '', component: UserProfileComponent},
  { path: 'user', component: UserProfileComponent},
  { path: 'signup', component: SignUpComponent},
  { path: 'custom-directives', component: CustomDirectivesComponent},
  { path: 'reactive-form', component: SearchMovieComponent},

]

export { ROUTES };

import { Routes } from '@angular/router';
import {SignUpComponent} from "./sign-up/sign-up.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {CustomDirectivesComponent} from "./custom-directives/custom-directives.component";

const ROUTES: Routes = [
  { path: '', component: UserProfileComponent},
  { path: 'user', component: UserProfileComponent},
  { path: 'signup', component: SignUpComponent},
  { path: 'custom-directives', component: CustomDirectivesComponent},

]

export { ROUTES };

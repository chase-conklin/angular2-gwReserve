import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import {ExerciseComponent} from "./exercise/exercise.component";
import {LoginComponent} from "./login/login.component";
import {LoginGuard} from "./services/login-guard.service";
import {DirtyFormGuard} from "./services/dirty-form-guard.service";

const routes: Routes = [
  {
    path: "exercises",
    component: ExerciseComponent
  },
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "**",
    pathMatch: "full",
    redirectTo: ""
  }
];

@NgModule({
  imports : [ RouterModule.forRoot(routes) ],
  exports : [ RouterModule ],
  providers: [
    LoginGuard,
    DirtyFormGuard
  ]
})

export class AppRoutingModule { }

export const mainAppRoutedComponents = [
  ExerciseComponent,
  LoginComponent
];

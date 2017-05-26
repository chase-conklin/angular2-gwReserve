import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import {ExerciseComponent} from "./exercise/exercise.component";
import {LoginComponent} from "./login/login.component";

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
  exports : [ RouterModule ]
})

export class AppRoutingModule { }

export const mainAppRoutedComponents = [
  ExerciseComponent,
  LoginComponent
];

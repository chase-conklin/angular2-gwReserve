import { NgModule } from "@angular/core";
import { RouterModule, Routes, PreloadingStrategy } from "@angular/router";

import {ExerciseComponent} from "./exercise/exercise.component";
import {LoginComponent} from "./login/login.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {LoginGuard} from "./services/login-guard.service";
import {DirtyFormGuard} from "./services/dirty-form-guard.service";
import {CustomPreloadingStrategy} from "./app.preloading";

const routes: Routes = [
  {
    path: "exercises",
    component: ExerciseComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  // {
  //   path: "room/:id",
  //   loadChildren: "./rooms/rooms.module",
  //   data: { preload: true }
  // },
  {
    path: "",
    component: WelcomeComponent
  },
  {
    path: "**",
    pathMatch: "full",
    redirectTo: ""
  }
];

@NgModule({
  imports : [ RouterModule.forRoot(routes, {preloadingStrategy: CustomPreloadingStrategy}) ],
  exports : [ RouterModule ],
  providers: [
    LoginGuard,
    DirtyFormGuard,
    CustomPreloadingStrategy
  ]
})

export class AppRoutingModule { }

export const mainAppRoutedComponents = [
  ExerciseComponent,
  LoginComponent
];

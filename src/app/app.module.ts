import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";

import { AppComponent } from "./app.component";
import {LoginComponent} from "./login/login.component";
import {NavigationComponent} from "./navigation/navigation.component";
import {ExerciseComponent} from "./exercise/exercise.component";
import {RoomsComponent} from "./rooms/rooms.component";


const routes: Routes = [
  {
    path: "exercises",
    component: ExerciseComponent
  },
  {
    path: "rooms/:id",
    component: RoomsComponent
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
  imports      : [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  declarations : [
    AppComponent,
    LoginComponent,
    NavigationComponent,
    ExerciseComponent,
    RoomsComponent
  ],
  bootstrap    : [
    AppComponent
  ]
})
export class AppModule { }

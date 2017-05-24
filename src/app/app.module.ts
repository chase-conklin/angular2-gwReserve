import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import {LoginComponent} from "./login/login.component";
import {NavigationComponent} from "./navigation/navigation.component";
import {ExerciseComponent} from "./exercise/exercise.component";

@NgModule({
  imports      : [ BrowserModule ],
  declarations : [ AppComponent, LoginComponent, NavigationComponent, ExerciseComponent ],
  bootstrap    : [ AppComponent ]
})
export class AppModule { }

import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";

import { AppRoutingModule, mainAppRoutedComponents } from "./app.routing.module";

import { AppComponent } from "./app.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { RoomsModule } from "./rooms/rooms.module";
import {RoomsService} from "./services/rooms.service";
import {NavigationService} from "./services/navigation.service";
import {LoginService} from "./services/login.service";
import { ExerciseChildComponent } from './exercise/exercise-child/exercise-child.component';


@NgModule({
  imports      : [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoomsModule,
    AppRoutingModule,
  ],
  declarations : [
    AppComponent,
    NavigationComponent,
    mainAppRoutedComponents,
    ExerciseChildComponent
  ],
  bootstrap    : [
    AppComponent
  ],
  providers    : [
    LoginService,
    NavigationService,
    RoomsService
  ]
})
export class AppModule { }

import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";

import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";

import { AppRoutingModule, mainAppRoutedComponents } from "./app.routing.module";

import { environment } from "./../environments/environment";

import { AppComponent } from "./app.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { ExerciseChildComponent } from "./exercise/exercise-child/exercise-child.component";
import { RoomsModule } from "./rooms/rooms.module";
import {RoomsService} from "./services/rooms.service";
import {NavigationService} from "./services/navigation.service";
import {LoginService} from "./services/login.service";
import {WelcomeComponent} from "./welcome/welcome.component";


@NgModule({
  imports      : [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    RoomsModule,
    AppRoutingModule,
  ],
  declarations : [
    AppComponent,
    NavigationComponent,
    WelcomeComponent,
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

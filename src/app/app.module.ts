import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { NgModule } from "@angular/core";

import { AppRoutingModule, mainAppRoutedComponents } from "./app.routing.module";

import { AppComponent } from "./app.component";
import { NavigationComponent } from "./navigation/navigation.component";


@NgModule({
  imports      : [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  declarations : [
    AppComponent,
    NavigationComponent,
    mainAppRoutedComponents
  ],
  bootstrap    : [
    AppComponent
  ]
})
export class AppModule { }

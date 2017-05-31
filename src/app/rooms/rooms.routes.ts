import { Routes, Route } from "@angular/router"

import {RoomsComponent} from "./rooms.component";
import {RoomsFormComponent} from "./rooms-form/rooms-form.component";
import {RoomsListComponent} from "./rooms-list/rooms-list.component";

const childRoutes: Route[] = [
  {
    path: "form",
    component: RoomsFormComponent
  },
  {
    path: "list",
    component: RoomsListComponent
  }
];

export const routes: Routes = [
  {
    path: "rooms/:id",
    component: RoomsComponent,
    children: childRoutes
  }
];

export const routedComponents = [
  RoomsComponent, RoomsFormComponent, RoomsListComponent
];



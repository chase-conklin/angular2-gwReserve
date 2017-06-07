import { Routes, Route } from "@angular/router";

import {RoomsComponent} from "./rooms.component";
import {RoomsFormComponent} from "./rooms-form/rooms-form.component";
import {RoomsListComponent} from "./rooms-list/rooms-list.component";
import {LoginGuard} from "../services/login-guard.service";
import {DirtyFormGuard} from "../services/dirty-form-guard.service";

const childRoutes: Route[] = [
  {
    path: "form",
    component: RoomsFormComponent,
    canDeactivate: [DirtyFormGuard]
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
    canActivate: [LoginGuard],
    children: childRoutes

  }
];

export const routedComponents = [
  RoomsComponent, RoomsFormComponent, RoomsListComponent
];



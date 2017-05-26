import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import {RoomsComponent} from "./rooms.component";

const routes: Routes = [
  {
    path: "rooms/:id",
    component: RoomsComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ]
})

export class RoomRoutingModule { }

export const routedComponents = [
  RoomsComponent
];

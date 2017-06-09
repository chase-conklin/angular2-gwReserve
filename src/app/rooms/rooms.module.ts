import { NgModule } from "@angular/core";
import {FormsModule} from "@angular/forms";

import {RoomRoutingModule} from "./rooms.routing.module";
import {routedComponents} from "./rooms.routes";
import {RoomsHeaderComponent} from "./rooms-header/rooms-header.component";
import {CommonModule} from "@angular/common";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RoomRoutingModule ],
  declarations: [ routedComponents, RoomsHeaderComponent ]
})

export class RoomsModule { }

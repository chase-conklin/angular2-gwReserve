import { NgModule } from "@angular/core";

import {RoomRoutingModule} from "./rooms.routing.module";
import {routedComponents} from "./rooms.routes";
import {RoomsHeaderComponent} from "./rooms-header/rooms-header.component";


@NgModule({
  imports: [ RoomRoutingModule ],
  declarations: [ routedComponents, RoomsHeaderComponent ]
})

export class RoomsModule { }

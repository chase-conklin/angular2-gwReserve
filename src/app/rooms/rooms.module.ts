import { NgModule } from "@angular/core";

import {RoomRoutingModule, routedComponents} from "./rooms.routing.module";

@NgModule({
  imports: [ RoomRoutingModule ],
  declarations: [ routedComponents ]
})

export class RoomsModule { }

import { Component, Input } from "@angular/core";

@Component({
  selector : "gw-rooms-list",
  templateUrl : "./rooms-list.component.html"
})

export class RoomsListComponent {
  @Input() id: String;
}

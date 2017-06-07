import { Component } from "@angular/core";

import { IDirtyCanDeactivate } from "./../../services/dirty-form-guard.service";

@Component({
  selector : "gw-rooms-form",
  templateUrl : "./rooms-form.component.html"
})

export class RoomsFormComponent implements IDirtyCanDeactivate {
  dirtyCanDeactivate () {
    return confirm("Do you want to leave?");
  }
}

import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";

export interface IDirtyCanDeactivate {
  dirtyCanDeactivate: () => boolean;
}

@Injectable()
export class DirtyFormGuard implements CanDeactivate<IDirtyCanDeactivate> {
  canDeactivate(component: IDirtyCanDeactivate) {
    return component.dirtyCanDeactivate();
  }
}

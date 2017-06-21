import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";

export interface CanComponentDeactivate {
  canDeactivate: () => boolean;
}

@Injectable()
export class DirtyFormGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(component: CanComponentDeactivate) {
    return component.canDeactivate();
  }
}

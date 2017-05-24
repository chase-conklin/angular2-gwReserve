import { Component } from "@angular/core";

interface RoomInterface {
  name: string;
  capacity: number;
}

@Component({
  selector : "gw-navigation",
  templateUrl : "./navigation.html"
})

export class NavigationComponent {
  private roomItems: Array<string> = ["Zelda", "Mario", "Kirby"];
  private roomCapacity: Array<number> = [23, 33, 42];

  public getNavItems() {

  }
}

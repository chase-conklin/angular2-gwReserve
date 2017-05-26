import { Component } from "@angular/core";

interface RoomInterface {
  name: string;
}

@Component({
  selector : "gw-navigation",
  templateUrl : "./navigation.component.html"
})

export class NavigationComponent {
  public roomNames: Array<string> = ["Zelda", "Mario", "Kirby"];
}

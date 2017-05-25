import { Component } from "@angular/core";

interface RoomInterface {
  name: string;
}

@Component({
  selector : "gw-navigation",
  templateUrl : "./navigation.html"
})

export class NavigationComponent {
  public roomNames: Array<string> = ["Zelda", "Mario", "Kirby"];
}

import { Component, OnInit } from "@angular/core";

import { INavigationItem } from "./../interfaces/INavigation";

import {RoomsService} from "../services/rooms.service";
import {NavigationService} from "../services/navigation.service";

@Component({
  selector : "gw-navigation",
  templateUrl : "./navigation.component.html"
})

export class NavigationComponent implements OnInit {

  constructor(
    public  navigationService: NavigationService,
    private roomService: RoomsService
  ) { }

  ngOnInit() {

    const welcomeItem: INavigationItem = {
      title : "Exercises",
      url   : "exercises",
      color : "green",
      orderBy : 30
    };

    this.navigationService.addNavigationItem(welcomeItem);

    this.roomService.fetchRoomsFromDB().subscribe(rooms => {
      for (let room in rooms) {
        const roomItem = {
          title: rooms[room].name,
          url: `/rooms/${rooms[room].id}`
        };

        this.navigationService.addNavigationItem(roomItem);
      }

      // console.log(rooms);
    });

  }
}

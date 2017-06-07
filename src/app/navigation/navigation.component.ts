import { Component, OnInit } from "@angular/core";
import {RoomsService} from "./../services/rooms.service";
import {NavigationService} from "../services/navigation.service";
import {LoginService} from "../services/login.service";

interface RoomInterface {
  name: string;
}

@Component({
  selector : "gw-navigation",
  templateUrl : "./navigation.component.html"
})

export class NavigationComponent implements OnInit{

  constructor(
    public  navigationService: NavigationService,
    private roomService: RoomsService,
    public loginService: LoginService
  ) { }

  ngOnInit() {

    this.roomService.fetchRoomsFromDB().then(rooms => {
      for (let roomKey in rooms) {
        const roomItem = {
          title: rooms[roomKey].name,
          url: `/rooms/${roomKey}`
        };

        this.navigationService.addNavigationItem(roomItem);
      }

      // console.log(rooms);
    });

  }
}

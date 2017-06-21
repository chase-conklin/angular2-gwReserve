import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { RoomsService } from "./../../services/rooms.service";

import { IRoom } from "./../../interfaces/IRoom";
import { IReservation } from "./../../interfaces/IReservation";

@Component({
  selector: "gw-room-list",
  templateUrl: "./rooms-list.component.html"
})
export class RoomsListComponent implements OnInit {
  public id: number;
  public room: IRoom;
  public reservations: IReservation[];

  constructor(
    private route: ActivatedRoute,
    private roomService: RoomsService
  ) { }

  ngOnInit() {
    this.route.parent.params
      .map(params => params["id"])
      .subscribe(id => {
        this.id = id;
        this.roomService.getRoomById(id).then(room => {
          this.room = room;
          this.reservations = this.getReservationsByDay();
        });
      });
  }

  getReservationsByDay(date = null) {
    if (!this.room.reservations) return [];

    const reservations = this.room.reservations[this.roomService.getRoomDateKey(date)] || [];

    // as seen elsewhere in this application, we'd like reservations to have ids and for this
    // to be the unique key generated for us in Firebase
    for (let reservationKey in reservations) {
      reservations[reservationKey] = reservationKey;
    }

    return reservations;
  };
}

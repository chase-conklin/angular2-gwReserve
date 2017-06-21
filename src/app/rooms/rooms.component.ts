import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, CanDeactivate } from "@angular/router";

import { ApplicationSettings } from "./../services/application-settings.service";
import { CanComponentDeactivate } from "./../services/dirty-form-guard.service";
import { RoomsService } from "./../services/rooms.service";

import { IRoom } from "./../interfaces/IRoom";

import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

@Component({
  selector: "gw-rooms",
  templateUrl: "./rooms.component.html"
})
export class RoomsComponent implements OnInit, CanComponentDeactivate {
  public id: number;
  public room: IRoom;

  // ActivatedRoute is provided by RouterModule
  constructor(
    private route: ActivatedRoute,
    private applicationSettings: ApplicationSettings,
    private roomService: RoomsService
  ) { }

  ngOnInit() {
    this.defaultRoom();

    this.route.params
      .map(params => {
        console.log("Before map", params);
        return params["id"];
      })
      .do(mappedParams => {
        console.log("After map", mappedParams);
      })
      .subscribe(id => {
        this.id = id;

        this.roomService.getRoomById(id)
          .subscribe(room => {
            this.room = room;

            // we need to set room picture (which comes from DB as a file name) to our relative path
            this.room.picture = this.applicationSettings.getImagePath(this.room.picture);
          });
      });
  }

  canDeactivate(): boolean {
    return window.confirm("Are you ready to leave this room?");
  }

  private defaultRoom() {
    this.room = {
      id: null,
      name: null,
      picture: ""
    };
  }
}

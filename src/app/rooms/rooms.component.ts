import { Component, OnInit } from "@angular/core";
import { trigger, state, style, transition, animate } from "@angular/animations";
import { ActivatedRoute, CanDeactivate } from "@angular/router";

import { ApplicationSettings } from "./../services/application-settings.service";
import { CanComponentDeactivate } from "./../services/dirty-form-guard.service";
import { RoomsService } from "./../services/rooms.service";

import { IRoom } from "./../interfaces/IRoom";

import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

@Component({
  selector: "gw-rooms",
  templateUrl: "./rooms.component.html",
  animations: [
    trigger("onLoad", [
      state("init",
        style({ opacity: 0, transform: "translate(0,-20px)" })
      ),
      state("loaded",
        style({ opacity: 1, transform: "none" })
      ),
      transition("init => loaded", animate("1s cubic-bezier(0, 1, 0.5, 1)"))
    ]),
    trigger("rightAfterOnLoad", [
      state("init",
        style({ opacity: 0, transform: "translate(0,30px)" })
      ),
      state("loaded",
        style({ opacity: 1, transform: "none" })
      ),
      transition("init => loaded", animate("500ms 400ms cubic-bezier(0, 1, 0.5, 1)"))
    ])
  ]
})
export class RoomsComponent implements OnInit, CanComponentDeactivate {
  public id: number;
  public room: IRoom;
  public state: string;

  // ActivatedRoute is provided by RouterModule
  constructor(
    private route: ActivatedRoute,
    private applicationSettings: ApplicationSettings,
    private roomService: RoomsService
  ) { }

  ngOnInit() {
    this.state = "init";

    this.defaultRoom();

    this.route.params
      .do(() => this.state = "init")
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

            this.state = "loaded";
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

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import {RoomsService} from "../services/rooms.service";

@Component({
  selector : "gw-rooms",
  templateUrl : "./rooms.component.html"
})

export class RoomsComponent implements OnInit {
  public id: string;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    // get snapshot
    // this.id = this.route.snapshot.params["id"];

    this.route.params
      .map(params => {
        return params["id"];
      })
      .subscribe(id => {
        this.id = id;
      });
  }
}

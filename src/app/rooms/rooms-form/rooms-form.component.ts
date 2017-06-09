import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

import { IDirtyCanDeactivate } from "./../../services/dirty-form-guard.service";


@Component({
  selector : "gw-rooms-form",
  templateUrl : "./rooms-form.component.html"
})

export class RoomsFormComponent implements IDirtyCanDeactivate, OnInit {
  public reasons: string[];


  @ViewChild("myForm") myForm: NgForm;

  ngOnInit() {
    this.reasons = ["Party", "Conference"];
  }

  onRoomSubmission(myForm: NgForm) {
    console.log(myForm);
  }

  dirtyCanDeactivate () {
    return this.myForm.dirty && !this.myForm.submitted ? confirm("You have unsaved work. Continue?") : true;
  }
}

import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

import { CanComponentDeactivate } from "./../../services/dirty-form-guard.service";


@Component({
  selector : "gw-rooms-form",
  templateUrl : "./rooms-form.component.html"
})

export class RoomsFormComponent implements CanComponentDeactivate, OnInit {
  public reasons: string[];


  @ViewChild("myForm") myForm: NgForm;

  public form = {};

  ngOnInit() {
    this.reasons = ["Party", "Conference"];
  }

  getErrors() {
    const errorList = [];

    const controls = this.myForm.controls;

    for(let controlKey in controls) {
      let currentControlErrors = controls[controlKey].errors;

      for(let errorKey in currentControlErrors) {
        errorList.push(`${controlKey} error: ${errorKey}`);
      }
    }

    return errorList;
  }

  onRoomSubmission(myForm: NgForm) {
    console.log(myForm);
  }

  canDeactivate () {
    return this.myForm.dirty && !this.myForm.submitted ? confirm("You have unsaved work. Continue?") : true;
  }
}

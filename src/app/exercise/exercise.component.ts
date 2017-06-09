import { Component, OnInit } from "@angular/core";

@Component({
  selector : "gw-exercise",
  templateUrl : "./exercise.component.html"
})

export class ExerciseComponent implements OnInit {
  public record: string;

  constructor() { }

  ngOnInit() {
    this.record = "Geekwise Angular Class";
  }

  onChildEdited(record) {
    this.record = record + " RECEIVED BY PARENT";
    console.log("putting record on database")
  }
}

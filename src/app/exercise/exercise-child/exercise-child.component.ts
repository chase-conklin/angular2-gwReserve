import {Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges} from "@angular/core";

@Component({
  selector: "app-exercise-child",
  templateUrl: "./exercise-child.component.html",
  styleUrls: ["./exercise-child.component.css"]
})
export class ExerciseChildComponent implements OnInit, OnChanges {
  @Input() public record;
  @Output() public onEditRecord = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("input binding changed", changes);
  }

  pretendEdit() {
    console.log("editing...");

    this.onEditRecord.emit(this.record + " passed by from child");
  }

}

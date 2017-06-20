import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector : "gw-login",
  templateUrl : "./login.component.html"
})

export class LoginComponent implements OnInit {
  public loggedInUser;
  public loginNeeded: boolean;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => this.loginNeeded = fragment === "login_needed");
  }

}


import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import { LoginService } from "./../services/login.service";

@Component({
  selector : "gw-login",
  templateUrl : "./login.component.html"
})

export class LoginComponent implements OnInit {
  public _loggedInUser;
  public loginNeeded: boolean;

  constructor(
    private route: ActivatedRoute,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.loginService.getLoggedInUser().subscribe({
      next: loggedInUser => this._loggedInUser = loggedInUser
    });

    this.route.fragment.subscribe(fragment => this.loginNeeded = fragment === "login_needed");
  }

}


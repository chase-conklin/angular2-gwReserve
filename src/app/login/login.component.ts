import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import { LoginService } from "./../services/login.service";

@Component({
  selector : "gw-login",
  templateUrl : "./login.component.html"
})

export class LoginComponent implements OnInit {
  public loggedInUser;
  public loginNeeded: boolean;

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.loginService.getLoggedInUser().subscribe({
      next: loggedInUser => {
        this.loggedInUser = loggedInUser;
        this._refreshRoute();
      }
    });
  }

  private _refreshRoute() {
    const navigateToUrlCommand = [ this.router.url.startsWith("/room/") ? "" : this.router.url ];
    this.router.navigate(navigateToUrlCommand);
  }

  login() {
    this.loginService.login();
  }

  logout() {
    this.loginService.logout();
  }

}


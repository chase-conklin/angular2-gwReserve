import { Injectable } from "@angular/core";
import { CanActivateChild, Router } from "@angular/router";
import {LoginService} from "./login.service";



@Injectable()
export class LoginGuard implements CanActivateChild {
  constructor (
    private loginService: LoginService,
    private router: Router
  ) {}

  canActivateChild() {
    console.log("Login guard activated");
    if (this.loginService.getLoggedInUser()) {
      return true;
    }

    this.router.navigate([""], {fragment: "login_needed"});
    return false;
  }
}

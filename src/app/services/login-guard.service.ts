import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import {LoginService} from "./login.service";



@Injectable()
export class LoginGuard implements CanActivate {
  constructor (private loginService: LoginService) {}

  canActivate() {
    return Boolean(this.loginService.getLoggedInUser());
  }
}

import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";


@Injectable()
export class LoginService {

  constructor() {
    this.loggedInUser = null;
  }


  public login() {
    // perform a fake, synchronous login for the time being
    this.loggedInUser = {
      displayName: "Chase M. Conklin",
      photoURL: "https://avatars1.githubusercontent.com/u/25158726?v=3&s=460"
    };
  }

  public logout() {
    this.loggedInUser = null;
  }
}

import { Injectable } from "@angular/core";

import { Observable } from "rxjs/Observable";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase/app";


@Injectable()
export class LoginService {
  private _loggedInUser: Observable<firebase.User>;

  constructor(private _authentication: AngularFireAuth) {
    this._loggedInUser = _authentication.authState;
  }

  public getLoggedInUser(): Observable<firebase.User> {
    return this._loggedInUser;
  }


  public login() {
    this._authentication.auth.signInWithPopup(new firebase.auth.GithubAuthProvider());
  }

  public logout() {
    this._authentication.auth.signOut();
  }
}

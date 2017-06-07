import { Injectable } from "@angular/core";

export interface IUser {
  displayName: string;
  photoURL: string;
  // permit against excess property checking
  [propName: string]: any;
}

@Injectable()
export class LoginService {
  private loggedInUser: IUser;

  constructor() {
    this.loggedInUser = null;
  }

  public getLoggedInUser(): IUser {
    return this.loggedInUser;
  }

  public login() {
    // perform a fake, synchronous login for the time being
    this.loggedInUser = {
      displayName: "Josh R. Dunlavy",
      photoURL: "https://avatars3.githubusercontent.com/u/6346817?v=3&s=460"
    };
  }

  public logout() {
    this.loggedInUser = null;
  }
}

import { Injectable } from "@angular/core";
import { Headers, Http } from "@angular/http";

import "rxjs/add/operator/toPromise";



@Injectable()
export class RoomsService {
  constructor(private http: Http) { }


  fetchRoomsFromDB() {
    return this.http.get("https://confdeconflictor.firebaseio.com/rooms.json")
      .toPromise()
      .then(response => {
        return response.json();
      });
  };
}


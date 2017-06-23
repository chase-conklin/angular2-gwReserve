import { PreloadingStrategy, Route } from "@angular/router";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/of";

export class CustomPreloadingStrategy implements PreloadingStrategy {
  preload(route:Route, load:Function):Observable<any> {
    if (route.data && route.data.preload) return load();

    return Observable.of(null);
  }
}

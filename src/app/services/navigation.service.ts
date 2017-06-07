// import { Injectable } from "@angular/core";

export class NavigationService {

  public navigationItems: Array<object> = [];

  public fetchNavigationItems() {
    return this.navigationItems;
  }

  public addNavigationItem(item) {
    this.navigationItems.push(item);
  }
}

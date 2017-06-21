// import { Injectable } from "@angular/core";

export class NavigationService {

  public navigationItems= [];

  public getNavigation() {
    return this.navigationItems;
  }

  public addNavigationItem(item) {
    this.navigationItems.push(item);
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor() { }
  modules = ['home', 'contact', 'users', 'products'];
  appState = new Map();

  initializeState() {
    this.modules.forEach((module: string) => {
      this.appState.set(module, {})
    })
  }

}

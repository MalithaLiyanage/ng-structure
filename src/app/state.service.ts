import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor() { }
  modules = ['home', 'contact', 'users', 'products'];
  appState: Map<string, Object> = new Map();

  initializeState() {
    this.modules.forEach((module: string) => {
      this.appState.set(module, {})
    })
  }

}

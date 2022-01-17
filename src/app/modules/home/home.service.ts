import { Injectable } from '@angular/core';
import {StateService} from "../../state.service";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private stateService: StateService
  ) { }

  homeState = this.stateService.appState.get('home');


}

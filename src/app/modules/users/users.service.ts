import { Injectable } from '@angular/core';
import {StateService} from "../../state.service";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private stateService: StateService
  ) { }

  userState = this.stateService.appState.get('users');
}

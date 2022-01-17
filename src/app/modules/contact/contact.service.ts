import { Injectable } from '@angular/core';
import {StateService} from "../../state.service";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private stateService: StateService
  ) { }

  contactState = this.stateService.appState.get('contact')
}

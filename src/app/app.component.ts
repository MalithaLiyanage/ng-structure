import { Component } from '@angular/core';
import {StateService} from "./state.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-structure';

  constructor (
    private stateService: StateService
  ) {
    this.stateService.initializeState();
  }

}

import { Injectable } from '@angular/core';
import {StateService} from "../../state.service";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private stateService: StateService
  ) { }

  productsState = this.stateService.appState.get('products')
}

import {Component, EventEmitter} from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onAddNewKeg'],
  template: `
  <div class="keg-form">
  <h3>Add new keg:</h3>
  <div class="row">
  <div class="col col-md-6 input-group-lg" >
  <input placeholder="Brewer Name" #newBrewer class="form-control"><br>
  <input placeholder="Beer Name" #newBeer class="form-control"><br>
  <input placeholder="Beer Type" #newType class="form-control"><br>
  <button (click)="addKeg(newBrewer, newBeer, newType)" class="btn-success add-button">Add</button>
  </div>
  </div>
  `
})

export class NewKegComponent {
  public onAddNewKeg: EventEmitter<Keg>;
    constructor(){
      this.onAddNewKeg = new EventEmitter();
    }
    addKeg(brewerName: HTMLInputElement, beerName: HTMLInputElement, beerType: HTMLInputElement) {
      var newKeg: Keg = new Keg(brewerName.value, beerName.value, beerType.value);
      this.onAddNewKeg.emit(newKeg);
    }
}


///creating newKeg is creating a new Keg object and that is what we are passing to the createKeg method on keg-list.components. Also it's better form to list out each element in the addKeg method, even if the inputs/variables are all the same element.

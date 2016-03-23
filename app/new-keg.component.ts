import {Component, EventEmitter} from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onAddNewKeg'],
  template: `
  <div class="keg-form">
  <h3>Add new keg:</h3>
  <input placeholder="Brewer Name" class="col-sm-8 input-md" #newBrewer>
  <input placeholder="Beer Name" class="col-sm-8 input-md" #newBeer>
  <input placeholder="Beer Type" class="col-sm-8 input-md" #newType><br>
  <button (click)="addKeg(newBrewer, newBeer, newType)" class="btn-success add-button">Add</button>
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

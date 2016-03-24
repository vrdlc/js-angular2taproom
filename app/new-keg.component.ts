import {Component, EventEmitter} from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onAddNewKeg'],
  template: `
  <div class="keg-form">
  <h3>Add new keg:</h3>

  <input placeholder="Brewer Name" #newBrewer class="form-control"><br>
  <input placeholder="Beer Name" #newBeer class="form-control"><br>

 <p>Select Beer Type</p>
  <select class="beerTypeDropdown form-control" #newType>
  <option value="Ale">Ale</option>
  <option value="IPA">IPA</option>
  <option value="Stout">Stout</option>
  <option value="Porter">Porter</option>
  <option value="Amber">Amber</option>
  <option value="Pilsner">Pilsner</option>
  <option value="Wheat">Wheat</option>
  <option value="Seasonal">Seasonal</option>
  </select>


  <button (click)="addKeg(newBrewer, newBeer, newType)" class="btn-success add-button">Add</button><br><br>

  `
})
///  <input placeholder="Beer Type" #newType class="form-control"><br>

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

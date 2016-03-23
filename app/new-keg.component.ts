import {Component, EventEmitter} from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onAddNewKeg'],
  template: `
  <div class="keg-form">
  <h3>Add new keg:</h3>
  <input placeholder="Brewer Name" class="col-sm-8 input-lg" #newBrewer>
  <input placeholder="Beer Name" class="col-sm-8 input-lg" #newBeer>
  <input placeholder="Beer Type" class="col-sm-8 input-lg" #newType>
  <button (click)="addKeg(newBrewer, newBeer, newType)" class="btn-success add-button">Add</button>
  </div>
  `
})

export class NewKegComponent {
  public onAddNewKeg: EventEmitter<Keg>;
    constructor(){
      this.onAddNewKeg = new EventEmitter();
    }
    addKeg(newBrewer: HTMLInputElement, newBeer: HTMLInputElement, newType: HTMLInputElement) {
      var newKeg: Keg = new Keg(newBrewer.value, newBeer.value, newType.value);
      this.onAddNewKeg.emit(newKeg);
      console.log(newKeg);
    }
}

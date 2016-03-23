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
  public onAddNewKeg: EventEmitter<String>;
    constructor(){
      this.onAddNewKeg = new EventEmitter();
    }
    addKeg(userBrewer, userBeer, userType: HTMLInputElement) {
      console.log(userBrewer.value, userType.value, userBeer.value);
      this.onAddNewKeg.emit(userBrewer.value);
      this.onAddNewKeg.emit(userBeer.value);
      this.onAddNewKeg.emit(userType.value);
    }
}

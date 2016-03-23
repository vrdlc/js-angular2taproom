import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { Keg } from './keg.model';

/////Keg List////
@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onTaskSelect'],
  directives: [KegComponent],
  templateUrl: 'app/keg-list.view.html'
})

export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  public filterType: string = "";
  constructor(){
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void {
    console.log('child', clickedKeg);
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }
  createKeg(brewerName: string, beerName: string, beerType: string, kegLevel: number): void {
    this.kegList.push(
      new Keg(brewerName, beerName, beerType, kegLevel) //DOES THIS INSTANTIATE WITH 127 PINTS?
    );
  }
  onChange(filterOption){
    this.filterType = filterOption;
    console.log(this.filterType);
  }
}

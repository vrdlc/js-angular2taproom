import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { Keg } from './keg.model';
import { NewKegComponent } from './new-keg.component';

/////Keg List////
@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  directives: [KegComponent, NewKegComponent],
  templateUrl: 'app/keg-list.view.html'
})

export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  // public filterType: string = "notEmpty";
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
      new Keg(brewerName, beerName, beerType, kegLevel)

    ); console.log(this.kegList)
  }
  // onChange(filterOption){
  //   this.filterType = filterOption;
  //   console.log(this.filterType);
  // }
}

import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { Keg } from './keg.model';
import { NewKegComponent } from './new-keg.component';
import { ShowKegProgressComponent } from './show-keg-progress.component';
import { EmptyPipe } from './empty.pipe';
import { TypePipe } from './type.pipe';

/////Keg List////
@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  pipes: [EmptyPipe, TypePipe],
  directives: [KegComponent, NewKegComponent, ShowKegProgressComponent],
  templateUrl: 'app/keg-list.view.html'
})

export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  public keg: Keg;
  public filterEmptyType: string = "notEmpty";
  public filterBeerType : string = "all";
  constructor(){
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void {
    console.log('child', clickedKeg);
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }
  createKeg(newKeg: Keg): void {
    console.log(newKeg);
    this.kegList.push(newKeg);//SEE * BELOW
  }
  onChange(filterOption){
    this.filterEmptyType = filterOption;
    this.filterBeerType = filterOption;
    console.log(this.filterBeerType);
  }

}



//// * since new-keg.component had created a new Object the createKeg method needs to be told to expect an object (rather than each individual propery since that is not what we are sending)

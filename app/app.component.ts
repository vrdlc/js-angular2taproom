import { Component } from 'angular2/core';
import { KegListComponent } from './keg-list.component';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
    <div class="container">
      <h1>TapHouse Keg Levels!</h1>
      <keg-list [kegList]="kegs"
      (onKegSelect)="kegWasSelected($event)">
     </keg-list>
    </div>
  `
})

export class AppComponent {
  public kegs: Keg[];
  constructor(){
    this.kegs = [
      new Keg("Widmer Brewery", "Omission IPA", "IPA", 127),
      new Keg("Stone Brewing", "Arrogant Bastard Ale", "Ale", 97),
      new Keg("10 Barrel", "Sinistor Black Ale", "Ale", 20)
    ];
  }
  kegWasSelected(clickedKeg: Keg): void {
    console.log(clickedKeg);
  }
}



/////Keg model, new Keg, and Keg list components have been started but are not updated in their entirety because I was following our to do list and it's a bit out of order./////

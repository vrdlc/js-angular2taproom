import { Component } from 'angular2/core';
import { KegListComponent } from './keg-list.component';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
    <div class="container">
    <div >
      <h1>TapHouse Keg Levels!</h1><br>
      <keg-list [kegList]="kegs"
      (onKegSelect)="kegWasSelected($event)">
     </keg-list>
    </div>
    </div>
  `
})
// [ngStyle] = "kegLevelByColor()"

export class AppComponent {
  public kegs: Keg[];
  public keg: Keg;
  constructor(){
    this.kegs = [
      new Keg("Widmer Brewery", "Omission", "IPA", 127),
      new Keg("Stone Brewing", "Arrogant Bastard", "Ale", 97),
      new Keg("10 Barrel", "Sinistor Black", "Ale", 20)
    ];
  }
  kegWasSelected(clickedKeg: Keg): void {
  }
  kegLevelByColor(keg): void {
    var textColor = { color: "green" };
    var fillLevel = keg.kegLevel;
    if (fillLevel <= 50) {
      textColor = { color: "yellow" }
    } else if (fillLevel <= 31) {
      textColor = { color: "red"}
    } else if (fillLevel = 0) {
      textColor = { color: "white" }
    }
  }
}



/////Keg model, new Keg, and Keg list components have been started but are not updated in their entirety because I was following our to do list and it's a bit out of order./////

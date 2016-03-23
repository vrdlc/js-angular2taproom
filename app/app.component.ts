import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>Skeleton Angular2 App!</h1>
    </div>
  `
})
export class AppComponent {
  public kegs: Keg[];
  constructor(){
    this.kegs = [
      new Keg("Widmer Brewery", "Omission IPA", "IPA", 127),
      new Keg("Rogue Brewery", "Arrogant Bastard Ale", "Ale", 97),
      new Keg("10 Barrel", "Sinistor Black Ale", "Ale", 20)
    ];
  }
  kegWasSelected(clickedKeg: Keg): void {
    console.log(clickedKeg);
  }
}



/////Keg model, new Keg, and Keg list components have been started but are not updated in their entirety because I was following our to do list and it's a bit out of order./////

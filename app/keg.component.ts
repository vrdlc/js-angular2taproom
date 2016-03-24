import { Component } from 'angular2/core';
import { Keg } from './keg.model';////KegComponent////


@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
  <div>
    <input *ngIf="keg.empty" type="checkbox" checked (click)="toggleDone(false)"/>
    <input *ngIf="!keg.empty" type="checkbox" (click)="toggleDone(true)"/>
    <label>{{ keg.brewerName }}'s</label>
    <label>{{ keg.beerName }}</label>
    <label>{{ keg.beerType }}</label>
  </div>
  `
})

export class KegComponent {
  public keg: Keg;
  toggleDone(setState: boolean) {
    this.keg.empty = setState;
  }
}

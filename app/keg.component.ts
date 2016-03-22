import { Component } from 'angular2/core';
import { Keg } from './keg.component';////TaskComponent////


@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
  <div>
    <input *ngIf="keg.empty" type="checkbox" checked (click)="toggleDone(false)"/>
    <input *ngIf="!keg.empty" type="checkbox" (click)="toggleDone(true)"/>
    <label>{{ keg.description }}</label>
  </div>
  `
})

export class KegComponent {
  public keg: Keg;
  toggleDone(setState: boolean) {
    this.keg.empty = setState;
  }
}

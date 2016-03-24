import {Component} from 'angular2/core';
import {Keg} from './keg.model';
import { EditKegDetailsComponent } from './edit-keg-details.component';

@Component({
  selector: 'show-keg-progress',
  inputs: ['keg'],
  directives: [EditKegDetailsComponent],
  template:`
  <div class="kegProgress">
    <h3>{{ keg.brewerName }}'s {{ keg.beerName }} Progress: {{ (keg.kegLevel/127*100).toFixed(0) }}% </h3>
    <button (click)="reduceByPint()" class="btn btn-info pint">Sold a pint?</button>
    <button (click)="reduceByGrowler()" class="btn btn-info growler">Sold a growler?</button>
    <br><br>
    <div class = "row">
      <div class="col-md-6">
        <div class="progress">
          <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: {{keg.kegLevel/127*100}}%">
          </div>
        </div>
      </div>
    </div>
  </div>
  `
})
export class ShowKegProgressComponent {
  public keg: Keg;

  reduceByPint(): void {
    if (this.keg.kegLevel <= 0){
      this.keg.kegLevel === 0;
      alert("Time to Order More " +  this.keg.beerName + " from " + this.keg.brewerName + "!!")
    } else
      this.keg.kegLevel --;
  }
  reduceByGrowler(): void {
    if (this.keg.kegLevel <= 0){
      this.keg.kegLevel === 0;
      alert("Time to Order More " +  this.keg.beerName + " from " + this.keg.brewerName + "!!")
    } else
    this.keg.kegLevel -=4;
  }
  kegLevelByColor(keg): void {
    var fillLevel = keg.kegLevel;
  }

///http://arjunu.com/2016/01/basic-angular-2-off-click-directive/ USE THIS WEBSITE TO HELP WITH CLICK HIDE/SHOW
}

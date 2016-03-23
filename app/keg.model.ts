export class Keg {
  public empty: boolean = false;
  // public pint: number = (kegLevel/127*100).toPrecision(3);

  constructor(public brewerName: string,
    public beerName: string,
    public beerType: string,
    public kegLevel: number = 127) {
  }
}

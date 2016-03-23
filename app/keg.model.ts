export class Keg {
  public empty: boolean = false;
  constructor(public brewerName: string,
    public beerName: string,
    public beerType: string,
    public kegLevel: number = 127) {
  }
}

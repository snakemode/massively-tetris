export class SomeClass {
  
  private _something: string;
  
  constructor(something: string) {
    this._something = something;
  }
  
  public print = () => console.log(this._something);
}
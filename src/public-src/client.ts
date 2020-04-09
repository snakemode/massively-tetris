console.log("Hello from client side TypeScript");

class ThisIsAClass {
  
  public Param: string;
  
  constructor(thatTakesATypedParameter: string) {
    this.Param = thatTakesATypedParameter;
  }
}


const instance = new ThisIsAClass("hi");

console.log(instance.Param);
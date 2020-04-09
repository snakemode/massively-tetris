import { ACoolClass } from "./ACoolClass";

console.log("Hello from client side TypeScript");

const instance = new ACoolClass("hi");

const logToConsole = (ourClass: ACoolClass) => {
  console.log(ourClass.Param);
}


logToConsole(instance); // Works fine
// logToConsole("something else"); // Fails at compile time!
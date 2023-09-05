"use strict";
// interface Admin {
//   name: string;
//   privileges: string[];
// }
const e1 = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date(),
};
function printEmployeeInformation(emp) {
    console.log('name: ' + emp.name);
    if ('privileges' in emp) {
        console.log('privileges: ' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('start date: ' + emp.startDate);
    }
}
printEmployeeInformation(e1);
printEmployeeInformation({ name: 'Bob', startDate: new Date() });
function addCombinables(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const addcombinableresult = addCombinables('Fred', 'Larry');
addcombinableresult.split(' ');
// class Car {
//   drive() {
//     console.log('Driving...');
//   }
// }
// class Truck {
//   drive() {
//     console.log('Driving a truck...');
//   }
//   loadCargo(amount: number) {
//     console.log('Loading cargo...' + amount);
//   }
// }
// type Vehicle = Car | Truck;
// const v1 = new Car();
// const v2 = new Truck();
// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(1000);
//   }
//   //instanceof is for classes only, not interfaces
// }
// useVehicle(v1);
// useVehicle(v2);
// //discriminated unions
// interface Bird {
//   type: 'bird'; //<<<<<<<
//   flyingSpeed: number;
// }
// interface Horse {
//   type: 'horse'; //<<<<<<<
//   runningSpeed: number;
// }
// type Animal = Bird | Horse;
// function moveAnimal(animal: Animal) {
//   let speed: number;
//   switch (animal.type) {
//     case 'bird':
//       speed = animal.flyingSpeed;
//       break;
//     case 'horse':
//       speed = animal.runningSpeed;
//       break;
//   }
//   console.log('Moving at speed ' + speed);
// }
// moveAnimal({ type: 'bird', flyingSpeed: 100 });
// //type casting
// //first syntax
// // const userInputElement = <HTMLInputElement>(
// //   document.getElementById('user-input')
// // );
// //second syntax (includes ! to guarantee not null)
// // const userInputElement = document.getElementById(
// //   'user-input'
// // )! as HTMLInputElement;  //guarantees value is not null
// const userInputElement = document.getElementById('user-input'); //value might be null
// if (userInputElement) {
//   (userInputElement as HTMLInputElement).value = 'Hi there!';
// }
// //index properties (for unknown properties)
// interface ErrorContainer {
//   // id: string; //can add other properties as long as type is same as index type (cannot be number, e.g.)
//   //don't know all the properties we need at design time and their names
//   [key: string]: string;
// }
// const errorBag: ErrorContainer = {
//   email: 'Not a valid email!',
//   username: 'Must start with a capital letter',
// };
// //function overloads

"use strict";
let addNumbers;
addNumbers = (n1, n2) => {
    return n1 + n2;
};
console.log(addNumbers(12, 13));
// can extend multiple interfaces, too
class Person {
    constructor(n) {
        this.name = n;
        this.age = 30;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
}
//interfaces differ from types in that you can only describe the structure of an object
let user1;
user1 = new Person('Fred');
// user1.name = 'Kitty'; //error because of readonly property above
console.log(user1.name);
console.log(user1);
user1.greet('Hello');

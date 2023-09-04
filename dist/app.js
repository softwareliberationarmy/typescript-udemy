"use strict";
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
console.log(user1);
user1.greet('Hello');

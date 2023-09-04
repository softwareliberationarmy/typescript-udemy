"use strict";
let user1;
user1 = {
    name: 'Fred',
    age: 37,
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    },
};
user1.greet('Hello');

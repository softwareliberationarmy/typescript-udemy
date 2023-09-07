"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//decorator is a function you apply to a class in a certain way
function Logger(logString) {
    return function (ctor) {
        console.log(logString);
        console.log(ctor);
    };
}
let DecoratorPerson = class DecoratorPerson {
    constructor() {
        this.name = 'Max';
        console.log('Creating person object...');
    }
};
DecoratorPerson = __decorate([
    Logger('LOGGING - PERSON')
], DecoratorPerson);
console.log('here we go');
const p = new DecoratorPerson();
console.log(p);

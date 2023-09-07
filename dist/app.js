"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//decorator is a function you apply to a class in a certain way
function Logger(logString) {
    console.log('LOGGER FACTORY');
    return function (ctor) {
        console.log(logString);
        console.log(ctor);
    };
}
function WithTemplate(template, hookId) {
    console.log('TEMPLATE FACTORY');
    return function (constructor) {
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1').textContent = p.name;
        }
    };
}
let DecoratorPerson = class DecoratorPerson {
    constructor() {
        this.name = 'Max';
        console.log('Creating person object...');
    }
};
DecoratorPerson = __decorate([
    Logger('Log string'),
    WithTemplate('<h1>My Person Object</h1>', 'app')
], DecoratorPerson);
console.log('here we go');
const p = new DecoratorPerson();
console.log(p);
const p2 = new DecoratorPerson();
console.log(p2);
// ---
function ProductLogger(target, propertyName) {
    console.log('Property decorator!');
    console.log(target);
    console.log(propertyName);
}
class Product {
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
    }
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    ProductLogger
], Product.prototype, "title", void 0);

//decorator is a function you apply to a class in a certain way
function Logger(logString: string) {
  console.log('LOGGER FACTORY');

  return function (ctor: Function) {
    console.log(logString);
    console.log(ctor);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log('TEMPLATE FACTORY');

  return function <T extends { new (...args: any[]): { name: string } }>(
    ctor: T
  ) {
    return class extends ctor {
      constructor(..._: any[]) {
        super();
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector('h1')!.textContent = this.name;
        }
      }
    };
  };
}

@Logger('Log string')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class DecoratorPerson {
  name = 'Max';

  constructor() {
    console.log('Creating person object...');
  }
}

console.log('here we go');

const p = new DecoratorPerson();
console.log(p);

// const p2 = new DecoratorPerson();
// console.log(p2);

// ---

function ProductLogger(target: any, propertyName: string | Symbol) {
  console.log('Property decorator!');
  console.log(target);
  console.log(propertyName);
}

function ProductLogger2(
  target: any,
  name: string,
  descriptor: PropertyDescriptor
) {
  console.log('Accessor decorator!');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function ProductLogger3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log('Method decorator!');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function ProductLogger4(target: any, name: string | Symbol, position: number) {
  console.log('Param decorator!');
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @ProductLogger
  title: string;
  private _price: number;

  @ProductLogger2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @ProductLogger3
  getPriceWithTax(@ProductLogger4 tax: number) {
    return this._price * (1 + tax);
  }
}

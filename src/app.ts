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

  return function (constructor: any) {
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector('h1')!.textContent = p.name;
    }
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

const p2 = new DecoratorPerson();

console.log(p2);

// ---

function ProductLogger(target: any, propertyName: string | Symbol) {
  console.log('Property decorator!');
  console.log(target);
  console.log(propertyName);
}

class Product {
  @ProductLogger
  title: string;
  private _price: number;

  set price(val: number) {
    if (val > 0) {
      this._price = val;
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }
}

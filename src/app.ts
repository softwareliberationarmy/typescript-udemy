//decorator is a function you apply to a class in a certain way
function Logger(ctor: Function) {
  console.log('logging');
  console.log(ctor);
}

@Logger
class DecoratorPerson {
  name = 'Max';

  constructor() {
    console.log('Creating person object...');
  }
}

console.log('here we go');

const p = new DecoratorPerson();

console.log(p);

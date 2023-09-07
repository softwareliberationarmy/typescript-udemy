//decorator is a function you apply to a class in a certain way
function Logger(logString: string) {
  return function (ctor: Function) {
    console.log(logString);
    console.log(ctor);
  };
}

@Logger('LOGGING - PERSON')
class DecoratorPerson {
  name = 'Max';

  constructor() {
    console.log('Creating person object...');
  }
}

console.log('here we go');

const p = new DecoratorPerson();

console.log(p);

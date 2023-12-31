// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number; //anonymous function
}

let addNumbers: AddFn;

addNumbers = (n1: number, n2: number) => {
  return n1 + n2;
};

console.log(addNumbers(12, 13));

interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

// can extend multiple interfaces, too

class Person implements Greetable {
  name?: string;
  age: number;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
    this.age = 30;
  }

  greet(phrase: string): void {
    if (this.name) {
      console.log(`${phrase} ${this.name}`);
    } else {
      console.log(phrase);
    }
  }
}

//interfaces differ from types in that you can only describe the structure of an object

let user1: Greetable;

user1 = new Person();
// user1.name = 'Kitty'; //error because of readonly property above

console.log(user1.name);

console.log(user1);

user1.greet('Hello');

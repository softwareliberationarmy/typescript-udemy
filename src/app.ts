interface Greetable {
  name: string;

  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age: number;

  constructor(n: string) {
    this.name = n;
    this.age = 30;
  }

  greet(phrase: string): void {
    console.log(`${phrase} ${this.name}`);
  }
}

//interfaces differ from types in that you can only describe the structure of an object

let user1: Greetable;

user1 = new Person('Fred');

console.log(user1);

user1.greet('Hello');

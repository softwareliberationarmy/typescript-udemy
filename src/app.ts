// const names: Array<string> = [];

// const promise = new Promise<string>((resolve, reject) => {
//   setTimeout(() => {
//     resolve('agdadsgd');
//   }, 2000);
// });

// promise.then((data) => {
//   data.split(' ');
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA!, objB);
}

const mergedObj = merge({ name: 'Fred', hobbies: ['knitting'] }, { age: 30 });
console.log(mergedObj);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value';
  if (element.length === 1) {
    descriptionText = `Got 1 element.`;
  }
  if (element.length > 1) {
    descriptionText = `Got ${element.length} elements.`;
  }
  return [element, descriptionText];
}

console.log(countAndDescribe(['Hi, there', 'Hello', 'Salut']));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return 'Value: ' + obj[key];
}

extractAndConvert({ name: 'Max' }, 'name');

class DataStorage<T extends string | number | boolean> {
  private data: Array<T> = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('12');
textStorage.addItem('max');
textStorage.removeItem('max');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// objStorage.addItem({ name: 'Max' });
// objStorage.addItem({ name: 'Manu' });
// objStorage.removeItem({ name: 'Max' });
// console.log(objStorage.getItems());

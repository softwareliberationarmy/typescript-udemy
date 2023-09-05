// const names: Array<string> = [];

// const promise = new Promise<string>((resolve, reject) => {
//   setTimeout(() => {
//     resolve('agdadsgd');
//   }, 2000);
// });

// promise.then((data) => {
//   data.split(' ');
// });

function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA!, objB);
}

const mergedObj = merge({ name: 'Fred' }, { age: 23 });

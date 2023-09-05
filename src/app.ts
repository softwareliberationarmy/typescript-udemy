const names: Array<string> = [];

const promise = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    resolve('agdadsgd');
  }, 2000);
});

promise.then((data) => {
  data.split(' ');
});

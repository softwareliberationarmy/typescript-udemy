"use strict";
const names = [];
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('agdadsgd');
    }, 2000);
});
promise.then((data) => {
    data.split(' ');
});

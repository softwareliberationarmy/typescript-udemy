"use strict";
// const names: Array<string> = [];
// const promise = new Promise<string>((resolve, reject) => {
//   setTimeout(() => {
//     resolve('agdadsgd');
//   }, 2000);
// });
// promise.then((data) => {
//   data.split(' ');
// });
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: 'Fred', hobbies: ['knitting'] }, { age: 30 });
console.log(mergedObj);
function countAndDescribe(element) {
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
function extractAndConvert(obj, key) {
    return 'Value: ' + obj[key];
}
extractAndConvert({ name: 'Max' }, 'name');

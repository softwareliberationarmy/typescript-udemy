function basicAdd(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

let number1: number;
number1 = 5;
const number2 = 2.8;
const printRs = true;
let phrase = 'Result is...';

const result = basicAdd(number1, number2, printRs, phrase);
console.log(result);

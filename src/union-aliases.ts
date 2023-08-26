type CombineInput = number | string;
type OutputType = 'as-number' | 'as-text';

function combine(
  input1: CombineInput,
  input2: CombineInput,
  resultConversion: OutputType
) {
  let result;
  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultConversion === 'as-number'
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  if (resultConversion === 'as-number') {
    return +result;
  } else {
    return result.toString();
  }
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('Brad', 'Angelina', 'as-text');
console.log(combinedNames);

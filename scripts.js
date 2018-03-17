// BACK END LOGIC
// 1st function
// generate an array of integers based on the three parameters
function generateArray(start, end, step) {
  let array = [];
  if (end >= start) {
    for (let i = start; i <= end; i += step) {
      array.push(i);
    }
    return array;
  } else {
    for (let i = start; i >= end; i += step) {
      array.push(i);
    }
    return array;
  }
}

// 2nd function
// computes the sum of all the array elements
function sumArray(array) {
  let sum = 0;
  array.forEach(function(summand) {
    sum += summand;
  });
  return sum;
}

// 3rd function
// convert every value of an array into their binary version
function convertBinary(array) {
  let binaryArray = [];
  array.forEach(function(element) {
    binaryArray.push(element.toString(2));
  });
  return binaryArray;
}

// FRONT END LOGIC
let p = document.querySelector('.output');
let div = document.querySelector('div');
// spans
let arraySpan = document.querySelector('.array');
let sumSpan = document.querySelector('.sum');
let binarySpan = document.querySelector('.binary');

// prompt inputs
const start = parseInt(prompt('Enter the start: '));
const end = parseInt(prompt('Enter the end: '));
const step = parseInt(prompt('Enter the step: '));
console.log(start, end, step);

// return error
if (isNaN(start) || isNaN(end) || isNaN(step) || step === 0 || end < start && step > 0 || end > start && step < 0) {
  p.textContent = 'Invalid integer input, please reload and try again.';
} else {
  const array = generateArray(start, end, step);
  const total = sumArray(array);
  const binaryArray = convertBinary(array);
  console.log(array, total, binaryArray);
  console.log(total);

  // change span text with values, show div, and hide p.output
  arraySpan.textContent = array;
  sumSpan.textContent = total;
  binarySpan.textContent = binaryArray;
  p.classList.toggle('hidden');
  div.classList.toggle('hidden');
}

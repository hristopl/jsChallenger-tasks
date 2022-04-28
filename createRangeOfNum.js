// The function should clean a from all occurrences of b
// Return the filtered array

const myFunction = (min, max) => {
  const rangeOfNums = [];
  for (let i = min; i <= max; i++) {
    rangeOfNums.push(i)
  }
  return rangeOfNums;
}

const min = 2;
const max = 10;

console.log(myFunction(min,max));
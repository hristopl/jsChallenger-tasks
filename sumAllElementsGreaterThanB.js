// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum

const myFunction = (a, b) => a.filter((element) => element > b).reduce((acc, cur) => acc + cur)

const a = [1, 2, 3, 4, 5, 6, 7];
const b = 2;
console.log(myFunction(a,b));

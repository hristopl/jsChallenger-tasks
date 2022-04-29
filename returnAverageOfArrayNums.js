// Write a function that takes an array of numbers as argument
// It should return the average of the numbers
const myFunction = (arr) => arr.reduce((acc, cur) => acc + cur, 0) / arr.length;

const arr = [10,100,1000];
console.log(myFunction(arr));
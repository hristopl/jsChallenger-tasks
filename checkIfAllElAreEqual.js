// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise

const myFunction = (arr) => arr.every((el) => el === arr[0]);

const arr = [1, 1, 1, 2]
console.log(myFunction(arr));
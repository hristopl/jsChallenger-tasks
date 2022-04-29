// Write a function that takes an array and a value as argument
// The function should clean the array from all occurrences of the given value and return the the cleaned version

const myFunction = (arr, val) => arr.filter((element) => element !== val);


const arr = [false,'2',1]
const val = false

console.log(myFunction(arr,val));
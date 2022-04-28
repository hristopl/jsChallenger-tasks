// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order

const myFunction =(arr) => {
  return arr.sort((a, b) => b - a);
}
const arr = [4,2,3,1]
console.log(myFunction(arr))
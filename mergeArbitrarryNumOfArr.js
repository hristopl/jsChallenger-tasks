// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays

const myFunction = (...arr) => {
  return arr.flat();
}

console.log(myFunction([1, 2, 3], [4, 5, 6]));
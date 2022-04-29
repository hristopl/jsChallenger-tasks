// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array

const myFunction = (a,b) => a.concat(b.filter((el) => a.indexOf(el) < 0))

const a = [1,2,3]
const b = [3,4,5]

console.log(myFunction(a,b));
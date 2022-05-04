// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array

const myFunction = (a,b) => [...new Set([...a, ...b])]

const a = [1,2,3,4,5]
const b = [5,6,7,8]

console.log(myFunction(a,b));
// Write a function that takes an object (a) and a number (b) as arguments
// Multiply all values of 'a' by 'b'
// Return the resulting object

const myFunction = (a,b) => Object.entries(a).reduce((result, [key,val]) => ({...result, [key]: [val] * b}),{})


const a = {w:15,x:22,y:13}
const b = 6

console.log(myFunction(a,b));
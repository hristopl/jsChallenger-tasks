// Write a function that takes two strings (a and b) as arguments
// Create an object that has a property with key 'a' and a value of 'b'
// Return the object

const myFunction= (a,b) => ({[a]:b})


const a = 'v'
const b = 'b'
console.log(myFunction(a,b));
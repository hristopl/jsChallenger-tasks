// Write a function that takes an object (a) and a string (b) as argument
// Return true if a has a property with key b
// Return false otherwise

const myFunction = (a,b) => b in a

const a = {x:'a',y:'b',z:'c'}
const b = 'z'

console.log(myFunction(a,b));
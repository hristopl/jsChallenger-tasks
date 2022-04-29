// Write a function that takes an object (a) and a string (b) as argument
// Return true if a has a property with key b
// Return false otherwise

const myFunction = (a,b) => a.hasOwnProperty(b)

const a = {x:'a',y:'b',z:'c'}
const b = 'a'

console.log(myFunction(a,b));
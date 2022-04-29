// Write a function that takes an object (a) as argument
// Return the sum of all object values

const myFunction = a => Object.values(a).reduce((sum,cur)=> sum + cur)

const a = {a:1,b:2,c:3}

console.log(myFunction(a));

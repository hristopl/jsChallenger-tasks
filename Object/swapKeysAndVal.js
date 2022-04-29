// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object

const myFunction = obj => {
  const swappedObj = Object.entries(obj).map(([key,val]) => [val, key])

  return Object.fromEntries(swappedObj)
}

const obj = {z:'a',y:'b',x:'c',w:'d'}
console.log(myFunction(obj));

// function myFunction(obj) {
//   return Object.entries(obj).reduce((acc, [key, val]) => {
//      return { ...acc, [val]: key };
//   }, {});
// }
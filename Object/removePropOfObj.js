// Write a function that takes an object as argument
// It should return an object with all original object properties
// except for the property with key 'b'

const myFunction = obj => {
  const {b, ...obj2} = obj

  return obj2
}
const b = { a: 1, b: 7, c: 3 }

console.log(myFunction(b));
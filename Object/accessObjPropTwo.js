// Write a function that takes an object with two properties as argument
// It should return the value of the property with key 'prop-2'
// Tipp: you might want to use the square brackets property accessor

const myFunction = obj => obj['prop-2']

const obj = {'prop-2': 1,  'prop-1': 2}
console.log(myFunction(obj));
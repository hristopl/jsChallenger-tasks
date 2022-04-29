// Write a function that takes an object with two properties and a string as arguments
// It should return the value of the property with key equal to the value of the string

const myFunction = (obj,key) => obj[key]

const obj = {country: 'Sweden',  continent: 'Europe'}
const key = 'continent'

console.log(myFunction(obj,key));
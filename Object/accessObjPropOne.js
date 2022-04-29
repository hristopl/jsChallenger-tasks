// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country

const myFunction = obj => obj.country

const obj = {country: 'Sweden',  continent: 'Europe'}

console.log(myFunction(obj));
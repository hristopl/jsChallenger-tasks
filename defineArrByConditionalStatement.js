const myFunction = (arr,n) => [n < 6 ? 0 : n, ...arr]
const arr = ['a','b']
const n = 2

console.log(myFunction(arr,n));
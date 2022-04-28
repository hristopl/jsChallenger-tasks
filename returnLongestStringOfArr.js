// Write a function that takes an array of strings as argument
// Return the longest string

function myFunction(arr) {
  
 return arr.reduce((acc, cur) => (acc.length <= cur.length ? cur : acc));
}

const arr = ['help', 'apple']

console.log(myFunction(arr));
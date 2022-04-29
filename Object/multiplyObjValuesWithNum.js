// Write a function that takes an object (a) and a number (b) as arguments
// Multiply all values of 'a' by 'b'
// Return the resulting object

const myFunction = (a,b) => {
  for (let val in a){
    a[val] *= b
  }

  return a
}

const a = {j:9,i:2,x:3,z:4}
const b = 10 

console.log(myFunction(a,b));
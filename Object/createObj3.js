// Write a function that takes two arrays (a and b) as arguments
// Create an object that has properties with keys 'a' and corresponding values 'b'
// Return the object

const myFunction = (a,b) => {
  const obj = {}

  a.forEach((el,index) => {
    obj[el] = b[index]
  })

  return obj
}

const a = ['a','b','c'] 
const b = [1,2,3]

console.log(myFunction(a,b));
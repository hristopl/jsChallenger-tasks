// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result

const getNthElement = a => {


return a.splice(0,3)
}

const a = [5,4,3,2,1,0]

console.log(getNthElement(a))
// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}
// { a: ['Alf']}

const myFunction = arr => {
  return arr.reduce((result,curr) => {
    const firstLetter = curr.charAt(0).toLowerCase()
    // const {[firstLetter]: list,...rest} = result
    // const nameList = list || []
    const nameList = result[firstLetter] || []
    console.log({result ,nameList, curr, firstLetter});
    return {...result,[firstLetter]: [...nameList,curr]}
    // return {[firstLetter]: [...nameList,curr], ...rest}
  }, {})
}

const arr = ['Alf', 'Alice', 'Ben','Boqn','Cvetko','Ceco']
console.log(myFunction(arr));
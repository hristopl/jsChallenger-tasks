const myFunction = obj => {
  return Object.entries(obj).reduce((acc, [key, val]) => ({
    ...acc,
    [key]: ['', ' '].includes(val) ? null : val})
    , {})
  }
  
  console.log(myFunction({ a: '', b: 'b', c: ' ', d: 'd' }))
  
  

console.log(myFunction({ a: '', b: 'b', c: ' ', d: 'd' }))
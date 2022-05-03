const myFunction = obj => {
return Object.keys(obj).reduce((acc, key) => {acc[key] = obj[key] === '' ? null : 
obj[key]; return acc; }, {})

}

console.log(myFunction({ a: '', b: 'b', c: ' ', d: 'd' }))
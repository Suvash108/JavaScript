let myarr = [1,2,3,4]
myarr.push(8)
console.log(myarr.length)
let n1 = myarr.slice(1,3)
console.log(`before slice ${myarr}`)
console.log(`before spliece ${myarr}`)
let n2=myarr.splice(1,3)
console.log(n2)
console.log(`after spliece ${myarr}`)

console.log(myarr.length)
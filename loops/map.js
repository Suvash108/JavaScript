const nums=[1,2,3,4,5,6]
//const val = nums.map((x)=>x+1)
// const val = nums.map((x)=>
// {
//     return x+1
// })
// console.log(val);


// const val = nums.map((x)=>x*10)
//                 .map((x)=>x+1)

// console.log(val)
const val = nums.map((x)=>x*10)
                .map((x)=>x+1)
                .filter((x)=>x>41) // this is called chaining 

console.log(val)

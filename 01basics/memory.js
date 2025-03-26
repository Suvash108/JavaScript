// There are two types of memory 
// 1. Stack [primitive]-> we alwayws get a Copy 
// 2. Heap [Non Primitive or reference type]-> we always get the reference so that changes can be seen and reflected 

// From Here only we will read about string: 

// const name= "Suvash";
// const repocount= 111;
// console.log(`My name is ${name} and my total no of repos is ${repocount}`); // `` this is backtick and its at the right most top corner below esc 

const name = "     Suvashchandrayadav";
// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.charAt(2))
// console.log(name.indexOf('c'))  

console.log(name.trim());
const str = "the real of this OGG world is mr.Suvash chandra Yadav"
const word= str.split(' ')
console.log(word)
console.log(str.replace('OGG','GODD'))
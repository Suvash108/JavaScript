const mynums = [1,2,3,4,5,6,7,8,9,10];
// const nums=  mynums.filter((num)=>num>4)
// console.log(nums)


// const newnums= mynums.filter((num)=>
// {
//     return num>4;
// })
// console.log(newnums);


const newNums=[];

mynums.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }

})
console.log(newNums);


function printmyname()
{
    console.log("congratulations Suvash you are a js master now")
}

console.log(printmyname());
// printmyname-> this is  just a reference
// printmyname()->this a function

//printmyname()

function add(number1,number2) 
//here number1 and number2 are parameters 
{
    return number1+number2
}
console.log(add(6,"Suvasha"));
// here suvash and 6 are arguments 
console.log("suvash", 44);




//--------------------------------------------------------------------------------------------------
 function cartpricecalculation(...num1)
 {
    return num1

 }

 console.log(cartpricecalculation(100,2000,3500,4234,833))
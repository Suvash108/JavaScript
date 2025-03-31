if(true)
{
    let v="Suvash"
    const vi="version"
    var k="lels"
}
//console.log(v); Here it is throwing some errors and why is this ? because of scope. so it means that let and consts are  local scope and howerver var is a global scope var delcaration method. 
//console.log(vi)
//console.log(k)

//------------------------------------------------------------------------------------------------------------------------------------


function one ()
{
    let username="Adarsh ";
    let usercaste="Mishra "

    function two()
    {
        console.log(username+usercaste);
        let king="suvash";
        console.log(king )
    }

    two()
    //console.log(king) defined outside the block 

}
one()
// we use to protect from the global scope pollution.
(function hero()
{ //named iifi
    console.log("on the way to become backend hero!!")

})();

( ()=>
{
    console.log("mazaa aaane laga hai abb toh backendhai toh achha suru mei jaisa lage ")
}) ();

((name)=>
{
    console.log(`hey ${name} welcome! to the world of backend!!`)
})('suvash');

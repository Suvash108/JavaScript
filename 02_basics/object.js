const mysym= Symbol("key1")


const myobj={
    name:"Suvash",
    [mysym]:"suryachaap",
    "FullName":"Suvash Chandra Yadav",
    email:"suvash@google.com"

}
console.log(myobj)
console.log(myobj["name"])
myobj.email="Suvashpmo@googl.com"
console.log(myobj["email"])
Object.freeze(myobj)//Here the object is freezed, it means that we can't change any attributes. Thank You so much!!
myobj.email="Suvashceo@googl.com"
console.log(myobj["email"])
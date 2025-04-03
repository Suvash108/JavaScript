const arr=[1,2,3,4,5,6,7,8,9,10]

for (const element of arr) {
    //console.log(element)
    
}

const map=new Map()
map.set("IND","INDIA")
map.set("NEP","NEPAL")
map.set("PAK","PAKSITAN")

//console.log(map)

for (const [key,value] of map) {
    //console.log(key ,'=>', value)
    
}

for (const key in map) {
    //console.log(key)
    
}

const myobject = {
    91:"ind",
    977:'Nepal',
    92:"Pakistan"

}

for (const key  in myobject) {


    
      //console.log(`${key} is the country code for ${myobject[key]}`)
    }




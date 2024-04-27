let a ={
    name:"HARISH",
    age:"20",
    address:{
    no:"09",
    street:"Lakshmi Nagar"
    }
}

let b=JSON.parse(JSON.stringify(a))

b.name="Raajaa"
b.address.no="10"

//console.log(a)
//console.log(b)

let c=[10,20,30,40,50]

let d=[...c]

d.push(60)

console.log(c)
console.log(d)


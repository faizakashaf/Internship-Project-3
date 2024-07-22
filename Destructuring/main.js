//Object Destructuring

let user = {
    id: 3,
    name: "faiza"
}

const {id,name} = user

console.log(id,name)

//Assignnig through destruturing
let foo ={
    p: 42,
    q :null
}

const {p:s , q: bar} = foo;

console.log(s)
console.log(bar)


let obj = {

    name : "laiba",
    age: 30,
    grade : "A"
}

const {name:fullName , age : y} = obj

console.log(fullName,y)

//Array Destrcuturing

let [b,c,...others] = [2,4,5,6,7,8,9]

console.log("b and c ", b,c)
console.log ("others", others)

let [a, ,e,f] = [1,2,3,4]
console.log("a :",a)
console.log("e :",e)
console.log("f :",f)


const x = [3,4,5,6,7]
const [t,z] = x
console.log(t,z)


const food = ["red","yellow",'green'] ;

const  [one,two,three,four] = food;

console.log(one,two,three,four)

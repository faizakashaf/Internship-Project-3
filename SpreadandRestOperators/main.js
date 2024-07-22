//BEfore Spread OPerators


const arr = [2,3,4]
const newArr = [5,6,arr[0],arr[1],arr[2]]
console.log(arr)
console.log(newArr)

//After Spread Operators
const newArr2 = [5,6,...arr]
console.log(newArr2)

//Combinig Arrays
const arr3 = [false,null,3]
const arr4 = [1,2,4]

const newArr5 = [...arr3,...arr4]
console.log(newArr5)

//Copying Arrays

const original = [3,4,5]
const copy = [...original]
console.log(copy)


//Rest Operators
function sum(...numbers){
return  numbers.reduce((total,number)=> total + number ,0)
}

console.log(sum(1,2,3,4,5))
//Array Destructuring using rest operator
const arrayDestructure = [false,true,0]
const [one ,two ,three] = arrayDestructure
console.log(one,two,three)
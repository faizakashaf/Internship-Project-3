
//Map Function in Array 
const array = [2,4,3,5,7];

const multiply = array.map((number) => {
 return number * 2
})

console.log(multiply) //map function gives new array 

//Map Function in Object

const obj = [
    {firstName: 'John', lastName: 'Doe', age: 25},
    {firstName: 'Jane', lastName: 'lara', age: 30},
    {firstName: 'Jack', lastName: 'Doe', age: 35},
    {firstName: 'Jill', lastName: 'mith', age: 40},
    {firstName: 'Joe', lastName: 'Doe', age: 45},
]

const fullName = obj.map((user)=>{
   return `My name is ${user.firstName} ${user.lastName} and ${user.age} years old`
})

console.log(fullName)


const filteration = obj.filter(({age})=>{
    return age < 35
 })
 console.log(filteration)


 //Reduce 
 const numbers = [1, 2, 3, 4, 5];

const add = numbers.reduce((total, currentValue) => {
    return total + currentValue;
}, 0)

console.log(add); 
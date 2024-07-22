// A higher order function is a function that takes one or
//  more functions as arguments, or returns a function as its result.

//Example 01
function callBack(){
    console.log("I'm callback function")
}

function higherOrderFunction(func){
    console.log("I'm higher order function")
    func()
}
higherOrderFunction(callBack)

//Example 02
const radius = [2,3,4]
const calculatedArea = function (radius){
   return  (Math.round(Math.PI * radius * radius))
};

const calculatedDiameter = function (radius){
  return   ( 2 * radius)
} ;


function calculation(radius,logic){
    let output = [];
    for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]))
 }
 return output;
}

console.log(calculation(radius,calculatedArea))
console.log(calculation(radius,calculatedDiameter))




// Example 01

function makeFun(){
    const name = "faiza"
    function displayFun(){
console.log(name)
    }
displayFun();   // name will easily get over here
}
 makeFun()

 console.log(name) // name is not defined error


// Example 02
function makeFun(){
    var name = "laiba";
 function displayFun(){
    console.log(name)
 }
 return displayFun;   // will give name
} 
const callFun = makeFun();
callFun()   

// Example 03
function outer(){
    let getY ;
    {
        const y = 6;
        getY =() => y;
    }
    console.log(typeof y)
     console.log(y)  //y is not defined
    console.log(getY())
}
outer()
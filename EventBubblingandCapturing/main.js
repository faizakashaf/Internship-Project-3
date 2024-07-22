const Btndiv = document.querySelector(".buttondiv")
const  button = document.getElementById("button")
const div = document.querySelector(".grandDiv")
const form = document.querySelector("form")
// Event Bubbling and capturing
// child to parent  and parent to child

Btndiv.addEventListener("click",(e)=>{
    console.log("diret div of btn")
},true)

div.addEventListener("click",(e)=>{
    console.log("grand div")
})

button.addEventListener('click',(e)=>{
    e.stopImmediatePropagation()
    console.log("i am button")
})




// function* generatorWithParams(start, end) {
//     for (let i = start; i <= end; i++) {
//         yield i;
//     }
// }

// const gen = generatorWithParams(5, 10);

// for (let value of gen) {
//     console.log(value); // Outputs: 5, 6, 7, 8, 9, 10
// }


function* generatorParams(start,end){
for (let i = start; start <= end; i++) {
  yield i   
}
}
const gen =  generatorParams(6,10)
for (let value of gen){
console.log(value)
}

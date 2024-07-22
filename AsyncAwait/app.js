 
 //Example 01
 const apiUrl = "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json";
fetch(apiUrl).
then((response)=> {
if(!response.ok){
    throw new Error (`HTTP Error,${response.status}`)
}
return response.json()
})
.then((data)=>console.log(data[0].name))
.catch(err=>{
    console.log(err)
})

//Example 02
const fetchPromise1 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  const fetchPromise2 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
  );
  const fetchPromise3 = fetch(
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
  );

  Promise.all([fetchPromise1,fetchPromise2,fetchPromise3]).
  then((responses)=>{
    for(const response of responses ){
console.log(`${response.url} and its ${response.status}`)
    }
  }).catch(err=>{
    console.log(err)
  })


//Example 03
async function fetchData(){
    const response = await fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
    if(!response.ok){
        throw new Error ("error",response.status)
    }
 const res = await response.json()
 return res;

}

const promise = fetchData()
promise
  .then((data) => {
    console.log(data[1].name);
  })
  .catch((error) => {
    console.error(`Could not get products: ${error}`);
  });

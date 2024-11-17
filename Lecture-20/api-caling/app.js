


// fetch -> webapi -> accepts string -> returns a promise -> partial data
// .json() -> returns a promise -> entire data

// fetch & promise

// fetch("https://api.tvmaze.com/search/shows?q=girls")
// .then(function(data){
//     // console.log(data , "then");
//     return data.json() 
// })
// .then(function(resp){
//     console.log(resp , "after json");
// })
// .catch(function(err){
//     console.log(err , "catch");
// })

// ----------------------------------------

// fetch & async-await

// async function call(){
//     let data = await fetch('https://api.tvmaze.com/search/shows?q=girls');
//     let resp = await data.json();
//     console.log(resp);  
// }



// ---------------------------------------------------------------------------------

// axios vs promise

// axios -> returns promise -> entire data at once

axios.get('https://api.tvmaze.com/search/shows?q=girls')
.then(function(data){
    // console.log(data , "then");
    console.log(data.data , "then");
})
.catch(function(err){
    console.log(err , "catch");
})


// -----------

// axios vs async await
async function call(){
    let resp = await axios.get("https://api.tvmaze.com/search/shows?q=girls");
    console.log(resp.data);   
}

call()
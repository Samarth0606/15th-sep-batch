
let p1 = new Promise((resolve , reject)=>{
    resolve("100 rupees");
    // reject('error');
})

p1
.then(function(data){
    console.log(data , "resolve");
})
.catch(function(err){
    console.log(err , "reject");
    
})














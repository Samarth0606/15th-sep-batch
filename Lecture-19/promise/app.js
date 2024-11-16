
// constructor fn ✅
// accepts a cb fn ✅
// cb has 2 args -> ✅resolve , reject 

// -> resolve() -> .then() + .finally()
// -> reject() -> .catch() + .finally()

// -------

// let p1 = new Promise()

// let p1 = new Promise( function(){} )

// let p1 = new Promise( function(resl , rejc){} )

// let p1 = new Promise( function(resolve , reject){
//     let data = "100 rupees";
//     let error = "hehehee not giving";

//     resolve(data); //case-1 ✅
//     // reject(error); //case-2
// } )

// // console.log(p1); //object

// p1
// .then( function(resp){
//     console.log(resp , ".then"); 
// } )
// .catch( function(err){
//     console.log(err , ".catch");
// } )
// .finally( function(){
//     console.log(".finally runs"); 
// } )



// // ----------------


// let p1 = new Promise( function(resolve , reject){
//     let data = "100 rupees";
//     let error = "hehehee not giving";

//     setTimeout(function(){
//         resolve(data); 
//     } , 10000)
// } )


// p1
// .then( function(resp){
//     console.log(resp , ".then"); 
// } )
// .catch( function(err){
//     console.log(err , ".catch");
// } )
// .finally( function(){
//     console.log(".finally runs"); 
// } )



// ----------------


// let p1 = new Promise( function(resolve , reject){
//     let data = "100 rupees";
//     let error = "hehehee not giving";

//     resolve(data);

// } )


// p1
// .then( function(resp){
//     console.log(resp , ".then"); 
// } )

// -----------------

// let p1 = new Promise( function(resolve , reject){
//     let data = "100 rupees";
//     let error = "hehehee not giving";

//     reject(error);

// } )


// p1
// .catch( function(err){
//     console.log(err , ".catch");
// } )

// ----------------

// let p1 = new Promise( function(resolve , reject){
//     let data = "100 rupees";
//     let error = "hehehee not giving";

//     resolve(data);
//     reject(error);

// } )


// p1
// .finally( function(){
//     console.log(".finally runs"); 
// } )
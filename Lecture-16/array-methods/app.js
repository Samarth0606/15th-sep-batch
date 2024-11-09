
// forEach()-> accepts a cb fn -> which accepts 2 arguments -> iterates on every element -> doesnot return anything

// let arr = [10,20,30,40,50];

// arr.forEach()
// arr.forEach(function(item , index){})
// let returnedVal = arr.forEach(function(item , index){
//     // console.log(`${item} -> ${index}`);  
//     console.log(item*item);  
// })
// console.log(returnedVal);

// --------------------------------------------------

// map()-> accepts a cb fn -> which accepts 2 arguments -> iterates on every element -> returns a new array ``with same length``

// let arr = [10,20,30,40,50];

// arr.map(function(){})
// let returnedVal2 = arr.map( function(item , index){
//     return item*item;
// } )
// console.log(arr);
// console.log(returnedVal2);


// --------------------------------------------------

// filter()-> accepts a cb fn -> which accepts 2 arguments -> iterates on every element -> returns a new array ``with any length no compulsion``

// let arr = [10,20,30,40,50];


// // arr.filter( function(){} )
// let returnedVal3 = arr.filter( function(item , index){
//     if(item>=30) {return true}
//     else{return false}
// } )


// console.log(arr);
// console.log(returnedVal3);


// -----------------------------------------------

// find-> only returns a single value -> (only 1st occurance and stops the iteration once you get the element)
// let arr = [10,20,30,30,40,50];
// let returnedVal4 = arr.find( function(item , index){
//     console.log("iteration ran");
//     // return item === 30
//     return item >= 30
// } )

// console.log(returnedVal4);


// -----------------------------------------------

// some() -> returns a boolean value only ->  (only 1st occurance and stops the iteration once you get the element)
// let arr = [10,20,30,30,40,50];

// let returnedVal5 = arr.some( function(item, index){
//     console.log("iteration ran");
//     // return item === 30
//     return item === 1000
// } )

// console.log(returnedVal5);


// -----------------------------------------------
// every() -> returns a boolean value only ->  runs till we get false
// let arr = [30,10,20,30,30,40,50];

// let returnedVal6 = arr.every( function(item , index){
//     console.log("iteration ran");
//     return item === 30
// } )

// console.log(returnedVal6);



// homework -> reduce
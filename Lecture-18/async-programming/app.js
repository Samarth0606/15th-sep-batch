

// console.log("open the shop");
// console.log("work for 10 secs in the shop");
// console.log("close the shop");

// -----------------

// delay -> setTimeout() => accepts 2 args -> cb fn ,  delay/timer

// 1s == 1000 ms

// setTimeout( function(){} , 5000 )


// console.log("open the shop");

// setTimeout( function(){
//     console.log("work for 5 secs");
    
// } , 5000 )

// console.log("close the shop");

// // -----------------------------------


// console.log("start");

// setTimeout(function(){
//     console.log("gian hai aap");
// } , 4000)

// setTimeout(function(){
//     console.log("mai hu don");
// } , 3000)

// console.log("end");


// //order             -> start  , end  , mai hu don , gian hai aap
// // total time taken -> 4s



// -----------------------------------


console.log("start");

setTimeout(function(){
    console.log("gian hai aap");
} , 0)

console.log("end");


//order             -> start , end , gian hai aap 
// total time taken -> 0
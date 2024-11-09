// 1. whenever you pass another function(B) into a function (A) then A is your HOF

// HOF
function a(x){
    console.log("Hi i am A");
    console.log(x , "x");   
}

// fn which are passed as an argument(b) to another fn (a) are called CB fn (b)
function b(){
    console.log("Hi i am B");
}

a(b);

// ----------------------------------------

// 2. when you return another fn (b) from a function(a) then (a)fn is called HOF

//HOF
// function a(){
//     console.log("hi i am a");
//     function b(){
//         console.log("hi i am b");
//     }
//     return b;
// }
// console.log( a() );


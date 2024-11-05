


// var a = 10;
// let b = 20;
// const c = 30;
// if(true){
//     var d = 100;
//     let e = 200;
//     const f = 300;
// }

// function sam(){
//     var x = 1000;
//     let y = 2000;
//     const z = 3000;
// }
// sam();


// -------------------------

// var a = 1;   // global
// let b = 2;   // script
// const c = 3; // script

// console.log(a); 
// console.log(b); 
// console.log(c); 

// sam();
// function sam(){
//     var d = 10;     // functional
//     let e = 20;     // block
//     const f = 30;   // block

//     console.log(d); 
//     console.log(e); 
//     console.log(f);
// }

// if(true){
//     var x = 1000;    // global
//     let y = 2000;    // block
//     const z = 3000;  // block

//     console.log(x);
//     console.log(y);
//     console.log(z);
// }


// --------------------------------

// var a = 10;      //global
// console.log(a);  // 10

// if(true){
//     var a = 2000;   //global -> a -> 2000 (redeclaration)
//     console.log(a); //2000
// }

// function sam(){
//     console.log(a); // undefined
//     var a = 1000;   // functional
//     console.log(a); // 1000
// }
// sam();
// console.log(a);  // 2000 (global change that happened in var redcelaration)

//lexical exvironment(parent)


// --------------------------------

// var a = 10;
// let b = 20;
// function sam(){
//     let b = 200;
//     console.log(b);
// }

// sam();
// if(true){
//     let b = 2000;
//     console.log(b);
// }

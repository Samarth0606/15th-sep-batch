

// function samarth(){

// }

// // let returnedVal = samarth() 
// // console.log(returnedVal); //undefi

// console.log( samarth() ); //undefi


// ---------------------------------

// // constructor calling -> create objects ->
// function Samarth(){

// }


// console.log( new Samarth() ); // {}

// // ---------------------------------

// // object -> key-value pair

// function Samarth(){
//     //   KEY   :  VALUE ,
//     this.naam = "SAMARTH  VOHRA"; // " = and ; " are important to notice here
//     this.age = 100;
// }



// let p1 = new Samarth(); 
// let p2 = new Samarth(); 
// console.log(p1);
// console.log(p2);


// // ---------------------------------



// function Samarth(username , age){
//     this.naam = username; 
//     this.age = age;
// }



// let p1 = new Samarth("maverick" , 2.5); 
// let p2 = new Samarth("simba" , 5); 
// console.log(p1);
// console.log(p2);


// ---------------------------------


// function Samarth(username , age){
//     this.naam = username; 
//     this.age = age;
//     this.fn = function(){
//         console.log("hello friends");
//     }
// }



// let p1 = new Samarth("maverick" , 2.5); 
// let p2 = new Samarth("simba" , 5); 
// let p3 = new Samarth("samarth" , 95); 
// console.log(p1);
// console.log(p2);
// console.log(p3);


// -------------------------------------


function Samarth(username , age){
    this.naam = username; 
    this.age = age;
    // this.greet = function(){
    //     console.log("hello friends");
    // }
}

Samarth.prototype.greet = function(){
        console.log("hello friends");
}



let p1 = new Samarth("maverick" , 2.5); 
let p2 = new Samarth("simba" , 5); 
let p3 = new Samarth("samarth" , 95); 
console.log(p1);
console.log(p2);
console.log(p3);






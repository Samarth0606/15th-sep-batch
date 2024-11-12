
// THIS ALWAYS POINTS TO THE OBJECT ❌
// THIS ALWAYS DEPENDS ON HOW IS IT BEING CALLED ✅


// 1. function calling -> window
// 2. method calling -> points to the object in which we have declared that method
// 3. constructor calling -> this always points to the newly created object
// 4. indirect calling -> call , apply , bind
// 5. arrow function calling -> 



// 1. Function/Direct calling  ->  window object

// function sam(){
//     console.log(this);
// }
// sam();

// ---------------------------------------------------

// 2. Method calling -> parent object

// let obj = {
//     a: 10,
//     fn: function(){
//         console.log(this); //obj
//     }
// }


// obj.fn() //method calling


// eg: 

// let obj = {
//     a:10,
//     fn: function(){
//         console.log(this); // obhj
//     }
// }


// obj.fn(); //method calling -> obj
// ----
// let ans = obj.fn;
// ans() //direct calling -> window


// ------------------

// let obj = {
//     a:10,
//     fn:function(){
//         console.log(this);    // 1. obj      ||  window
//         let sam = function(){
//             console.log(this); //2. windows  ||  window
//         }
//         sam();
//     }
// }

// obj.fn(); //case-1

// let ans = obj.fn;
// ans(); //case-2

// ---------------------------------------------------

// 3. constructor calling -> this always points to the newly created object

// function Sam(name , age){
//     this.naam = name;
//     this.umar = age;
// }

// let p1 = new Sam("sam" , 39);
// let p2 = new Sam("mav" , 5);

// ---------------------------------------------------

// 4. indirect calling:(call , apply and bind)

// let obj1 = {
//     a:10,
//     fn:function(x , y){
//         console.log(this);   //obj
//         console.log(this.a); // 10
//         console.log(x , y);
//     }
// }
// let obj2 = {
//     a:50
// }

// obj2.fn(); //error ❌
// obj1.fn("sam"); //✅
// obj1.fn.call(obj2 , "sam" , 10) //accepts the new this where you want to point it
// obj1.fn.apply(obj2, ["sam" , 10]) //accepts the new this where you want to point it


// // 
// // bind doesnot execute it, it simply create a copy of that fn

// let newFn = obj1.fn.bind(obj2 , "lol" , "lolipop") //accepts the new this where you want to point it
// console.log(newFn);
// newFn()


// ---------------------------------------------------


// 5. arrow functions -> this keyword depends on parents this

// let obj= {
//     a:100,
//     fn: function(){
//         console.log(this);   
//     }
// }

// obj.fn();


// -----------------

// let obj= {
//     a:100,
//     fn: ()=>{
//         console.log(this);  // window
//     }
// }

// obj.fn();

// let obj= {
//     a:100,
//     fn: ()=>{
//         console.log(this);     // 1. window
//         let sam = ()=>{
//             console.log(this); // 2. window
//         }
//         sam();
//     }
// }

// obj.fn();


// --------------------------------------------

let obj= {
    a:100,
    fn: function(){
        console.log(this);     // 1. obj
        let sam = ()=>{
            console.log(this); // 2. obj
        }
        sam();
    }
}

obj.fn();



// function sam(){
//     console.log(this); //window
//     console.log(this.a); //undefined
// } 

// sam(); //window

// ----------------------------

// function sam(){
//     console.log(this); //window
//     console.log(this.name);  //already available in the window => "" (empty string)
// } 



// sam(); //window

// // -----------------------------


// let obj = {
//     a:10,
//     fn: function(){
//         console.log(this); // obj
//         let sam = ()=>{
//             console.log(this); // obj
//         }
//         sam();
//     }
// }

// obj.fn() //method

// -----------------------------


// let obj = {
//     a:10,
//     fn: ()=>{
//         console.log(this); // window
//         let sam = ()=>{
//             console.log(this); // window
//         }
//         sam();
//     }
// }

// obj.fn() //method


// --------------------
// let obj = {
//     a:10,
//     fn: function(){
//         console.log(this); // window
//         let sam = ()=>{
//             console.log(this); // window
//         }
//         sam();
//     }
// }

// let ans = obj.fn //method

// ans(); //direct



// --------------------


// let obj = {
//     a: 10,
//     fn: function(x , y){
//         console.log(this.a , x ,y);   
//     }
// }

// let obj3 = {
//     a: 50, 
// }

// obj.fn()
// obj.fn.call(obj3 ,10,20) //immidiately calling
// obj.fn.apply(obj3,[10,20]) //immidiately calling
// let newFn = obj.fn.bind(obj3,10,20) //creates a copy (call arguments = comma seperated)
// newFn()


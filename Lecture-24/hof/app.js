//hof
// function a(fn){
//     console.log('hello from a');
//     fn();
// }


//cb fn
// function b(){
//     console.log("hello form b");  
// }

// a(b)


// ----------------

//hof
// function outer(){
//     function inner(){
//         console.log("i am inner");
//     }
//     return inner
// }

// -----------------------------------

// let arr = [10 , "sam" , true , "vohra" , false , 30 , 50];
// function getString(){
//     let result = [];
//     for(let item of arr){
//         if(typeof(item) === 'string'){
//             result.push(item)
//         }
//     }
//     return result;
// }
// function getboolean(){
//     let result = [];
//     for(let item of arr){
//         if(typeof(item) === 'boolean'){
//             result.push(item)
//         }
//     }
//     return result;
// }
// function getNumber(arr){
//     let result = [];
//     for(let item of arr){
//         if(typeof(item) === 'number'){
//             result.push(item)
//         }
//     }
//     return result;
// }
// console.log( getNumber(arr) );
// console.log( getboolean(arr) );
// console.log( getString(arr) );

// ------------
// hof approach

function getboolean(item){
    return typeof item === 'boolean'
}
function getString(item){
    return typeof item === 'string'
}
function getNumber(item){
    return typeof item === 'number'
}

function gett(arr , fn){
    let result = [];
    for(let item of arr){
        if(fn(item)){
            result.push(item)
        }
    }
    return result 
}

let arr = [10 , "sam" , true , "vohra" , false , 30 , 50];
console.log( gett(arr , getNumber) );
console.log( gett(arr , getString) );
console.log( gett(arr , getboolean) );



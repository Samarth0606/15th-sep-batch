
// for-in -> objects
// for-of -> arrays
// let arr = [10,20,30,40,50];

// for-of
// for(let item of arr){
//     console.log(item); 
// }



// -----------------

// let person = {
//     a:10,
//     b:20,
//     c:30
// }
// // for-in
// for(let item in person){
//     console.log(item); //keys
//     console.log(person.item); //value ❌
// }


// ---------------------------------------

// let arr = ["sam" , "mav" , 10 , "true" ,false];

// // // for-of (arrays)

// // for(let item=1; item<=10; item++){...}
// for(let item of arr){
//     console.log(item);   
// }

// arr[3] = "ring light"
// console.log(arr);


// ---------------------------------------
let human = {
    arms : 2,
    isSkin : true,
    doCrawl : false,
    eat: "food"
}

// console.log( human.eat );
// console.log( human.item ); //undefined

// for-in (objects)

for(let item in human){
    console.log(item);    //key
    // console.log(human.item);    //value ❌
    console.log(human[item]);    //value ✅
}

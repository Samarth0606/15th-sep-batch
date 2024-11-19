
// ----- selection ------
// 1. getElementsByClassName() -> array

// let h1 = document.getElementsByTagName("h1");
// console.log( h1[0] );
// console.log( h1[1] );

// // ------ manipulation ------
// // BAD way -> WET 
// h1[0].style.backgroundColor = "red";
// h1[0].style.color = "yellow";
// h1[0].style.fontSize = "90px";


// // GOOD way -> DRY 
// // h1[0].style.cssText = ``
// h1[0].style.cssText = `color: red; background-color: yellow; font-size: 100px; border: 5px solid black `


// ----------------------------------------

// 2. getElementById -> single element

// let idd  = document.getElementById('vohra');

// idd.style.color = "red";
// idd.style.backgroundColor = "green";



// ----------------------------------------

// 3. getElementsByClassName -> array

// let classEl = document.getElementsByClassName('sam') //100 elements


// wet
// for(let item of classEl){
//     item.style.color  = "red";
//     item.style.backgroundColor  = "yellow";
//     item.style.fontSize  = "100px";
// }

// dry
// for(let item of classEl){
//     item.style.cssText = `color:red; background-color:green; font-size:100px`
// }


// ----------------------------------------

// 4. querySelector() -> singular selector (first occurance)

// let ele  = document.querySelector('h1') //tag
// let ele2 = document.querySelector('#vohra') //id
// let ele3 = document.querySelector('.sam') //class


// ----------------------------------------

// 5. querySelector() ->multiple selector (all occurances)

let ele  = document.querySelectorAll('h1') //tag
let ele2 = document.querySelectorAll('#vohra') //id (more than one)
let ele3 = document.querySelectorAll('.sam') //class

// let ele4 = document.getElementById('vohra'); //one element






// let h1 = document.querySelector('h1');
// let btn = document.querySelector('button');


// function icecream(){
//     console.log("i want ice cream");
// }
// function momos(){
//     console.log("i want momos");
// }


// h1.onclick = icecream;
// btn.onclick = momos;


// ----------------------------------------------

// let h1 = document.querySelector('h1');
// let btn = document.querySelector('button');


// function icecream(){
//     console.log("i want ice-cream");
// }
// function momos(){
//     console.log("i want momos");
// }

//problem 😅
// h1.onclick = momos;
// h1.onclick = icecream;


// ----------------------------------------------

// solution => addEventListener => 3rd way

// let h1 = document.querySelector('h1');
// let btn = document.querySelector('button');


// function icecream(){
//     console.log("i want ice-cream");
// }
// function momos(){
//     console.log("i want momos");
// }

// // h1.addEventListener('click' , function(){} )
// h1.addEventListener('click' , icecream )
// h1.addEventListener('click' , momos )

// ----------------------------------------------

// let redEl = document.querySelector('#red')
// let blueEl = document.querySelector('#blue')
// let greenEl = document.querySelector('#green')
// let bodyEl = document.querySelector('body')


// redEl.addEventListener('click' , function(e){
//     console.log(e);
//     console.log(e.target);
//     console.log(e.target.innerText);
//     bodyEl.style.backgroundColor = "red"
// })
// blueEl.addEventListener('click' , function(){
//     bodyEl.style.backgroundColor = "blue"
// })
// greenEl.addEventListener('click' , function(){
//     bodyEl.style.backgroundColor = "green"
// })


// ----------------------------------------------


let redBtn = document.querySelector('#red')
let blueBtn = document.querySelector('#blue')
let greenBtn = document.querySelector('#green')
let bodyEl = document.querySelector('body')


redBtn.addEventListener('click' , function(e){
   bodyEl.style.backgroundColor = e.target.innerText;
})
blueBtn.addEventListener('click' , function(e){
   bodyEl.style.backgroundColor = e.target.innerText;
})
greenBtn.addEventListener('click' , function(e){
   bodyEl.style.backgroundColor = e.target.innerText;
})







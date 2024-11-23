let inpEl = document.querySelector('input');

// inpEl.addEventListener('input' , function(event){
//     // console.log(event);
//     // console.log(event.target);
//     console.log(event.target.value);
// })


// ----------------------------------------

// keyup and keydown

// inpEl.addEventListener('keydown' , function(e){
//     if(e.key === "Enter"){
//         console.log(e.target.value);   
//     }  
// })


// inpEl.addEventListener('keydown' , function(e){
//     if(e.which === 13){
//         console.log(e.target.value);
//     }
// })


// ----------------------------------------



let h1 = document.querySelector('h1');
let inp = document.querySelector('input');

inp.addEventListener('input' , (event)=>{
    h1.innerHTML = event.target.value
})




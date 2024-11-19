// selection

let p = document.querySelector('p');


// manipulation

// 1. innerText (property) => getters + setters
// console.log( p.innerText ); //brainful (uses brain and reads css)
// p.innerText = "happy bday 1"; //brainful (uses brain and reads css)

// 2. textContent (property)  => getters + setters
// console.log( p.textContent ); //brainless (doesnot read css)
// p.textContent = "happy bday 2"; //brainless (doesnot read css)

//3. innerHTML (property) => getters + setters

// console.log( p.innerHTML ); //gives everything
p.innerHTML = "happy bday 3" ; // setter

{/* <p> happy bday 3 </p> */}
// console.log( p.outerHTML ); //gives everything + outer tag as well

// -------------------



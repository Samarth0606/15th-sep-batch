let sectionEl = document.querySelector('section');


// down -> children

// console.log( sectionEl.children[0] );
// console.log( sectionEl.children[1] );
// console.log( sectionEl.children[1].children[0] );
// console.log( sectionEl.children[1].children[0].children[0].style.color="red" );



// ------------------------------------------------

// up -> parentElement
// console.log( sectionEl.parentElement.style.backgroundColor="orange" );

// console.log( sectionEl.parentElement.parentElement );


// -------------------------------------------------

console.log( sectionEl.children[0].children[2].style.color = "blue" )
console.log( sectionEl.children[0].children[2].previousElementSibling.previousElementSibling.style.color = "silver" )
// console.log( sectionEl.children[0].children[1].nextElementSibling.style.color = "green" )


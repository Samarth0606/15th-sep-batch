//  selection 
let h1 = document.querySelector('h1');

// manipulation
// console.log( h1.getAttribute('class') ); //getter
// console.log( h1.setAttribute('class' , 'vohra') ); //setter
// console.log( h1.getAttribute('class') ); //getter


// classlist

// h1.classList.add('vohra')
h1.classList.add('vohra' , 'sam' , 'lolipop' , 'maverick');

// h1.classList.remove('sam' , 'lolipop' , 'vohra' , 'maverick')
// h1.classList.toggle('sam');

console.log( h1.classList.contains('samarth') );



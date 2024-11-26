

// function Sam(age , color , salary){
//     this.age = age;
//     this.favColor = color;
//     this.salary = salary;
//     // this.greet = function(){
//     //     console.log("woof woof");
//     // }
// }

// Sam.prototype.greet = function(){
//     console.log("woof woof");
// }

// // console.log( sam() ); //undef
// let p1 = new Sam(2.5, "brown", 10000000) 
// let p2 = new Sam(5, "black" , 5000000) 

// console.log(p1);
// p1.greet()
// console.log(p2);
// p2.greet()


// ----------------------------------

class Sam{
    constructor(age , color , salary){
        this.age = age;
        this.favColor = color;
        this.salary = salary;
    }
    greet(){
        console.log("woof woof");
    }
}

class Mav extends Sam{
    constructor(age , color , salary, legs){
        super(age , color , salary);
        this.legs = legs;
    }
    greet(){
        console.log("hi hi");
    }
    bye(){
        console.log("take care");
    }
}


let p1 = new Mav(2.5, "brown", 10000000 , 4) 
let p2 = new Mav(5, "black" , 5000000 , 4) 

console.log(p1);
p1.greet()
console.log(p2);
p2.greet()









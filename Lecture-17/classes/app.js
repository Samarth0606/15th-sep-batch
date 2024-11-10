

// constructor
// function Person(name , age , gender){
//     this.naam = name;
//     this.age = age;
//     this.isMale = gender;
//     // this.greet = function(){
//     //     return `hi from ${this.naam} bhaiya`
//     // }
// }

// Person.prototype.greet = function(){
//         return `hi from ${this.naam} bhaiya`
// }

// let p1 = new Person("sam"  , 14 , true);
// console.log(p1);


// ----------------------------------------
// classes

// class Person{}

// class Person{
//     constructor(){}
// }

// class Person{
//     constructor(name , age , gender){
//         this.naam = name;
//         this.age = age;
//         this.isMale = gender;
//     }
//     greet(){
//         return `hi from ${this.naam} bhaiya`
//     }
// }


// let p1 = new Person("sam"  , 14 , true);
// console.log(p1);

// -----------------------------------------

// class Person{
//     constructor(name , age , gender){
//         this.naam = name;
//         this.age = age;
//         this.isMale = gender;
//     }
//     greet(){
//         return `hi from ${this.naam} bhaiya`
//     }
// }

// class Student{
//     constructor(name , age , gender){
//         this.naam = name;
//         this.age = age;
//         this.isMale = gender;
//     }
//     greet(){
//         return `hi from ${this.naam} bhaiya`
//     }
// }

// let p1 = new Person("sam"  , 14 , true);
// let p2 = new Student("mav"  , 2 , true);
// console.log(p1);
// console.log(p2);

// //bad way

// -----------------------------------------


// class Person{
//     constructor(name , age , gender){
//         this.naam = name;
//         this.age = age;
//         this.isMale = gender;
//     }
//     greet(){
//         return `hi from ${this.naam} bhaiya`
//     }
// }

// class Student extends Person{}

// let p1 = new Person("sam"  , 14 , true);
// let p2 = new Student("mav"  , 2 , true);
// console.log(p1);
// console.log(p2);

//good way

// // -----------------------------------------

// class Person{
//     constructor(name , age , gender){
//         this.naam = name;
//         this.age = age;
//         this.isMale = gender;
//     }
//     greet(){
//         return `hi from ${this.naam} bhaiya`
//     }
// }

// class Student extends Person{
//     constructor(name , age , gender , rollNum){
//         super(name , age , gender) //calls the parent constructor
//         this.rollNum = rollNum
//     }
// }

// let p1 = new Person("sam"  , 14 , true);
// let p2 = new Student("mav"  , 2 , true , 100);
// console.log(p1);
// console.log(p2);


// -----------------------------------------

// class Person{
//     constructor(name , age , gender){
//         this.naam = name;
//         this.age = age;
//         this.isMale = gender;
//     }
//     greet(){
//         return `hi from ${this.naam} bhaiya`
//     }
// }

// class Student extends Person{
//     constructor(name , age , gender , rollNum){
//         super(age , name , gender) //order matters
//         this.rollNum = rollNum
//     }
// }

// let p1 = new Person("sam"  , 14 , true);
// let p2 = new Student("mav"  , 2 , true , 100);
// console.log(p1);
// console.log(p2);




// -----------------------------------------

class Person{
    constructor(name , age , gender){
        this.naam = name;
        this.age = age;
        this.isMale = gender;
    }
    greet(){
        return `hi from ${this.naam} bhaiya`
    }
}

class Student extends Person{
    constructor(name , age , gender , rollNum){
        super(age , name , gender) //order matters
        this.rollNum = rollNum
    }
    bye(){
        return `bye bye from ${this.naam}`
    }
    greet(){
        return `hello ji from ${this.naam} bhaiya`
    }
}

let p1 = new Person("sam"  , 14 , true);
let p2 = new Student("mav"  , 2 , true , 100);
console.log(p1);
console.log(p2);
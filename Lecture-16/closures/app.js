

function samarth(){
    let a = 10;
    let b = 20;
    return function vohra(){
        console.log(a); 
    }
    // return vohra;
}
let returnVal = samarth();

console.log(returnVal);

returnVal()











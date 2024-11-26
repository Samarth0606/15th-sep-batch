



function counter(){
    let count = 0;

    return {
        getCount : function(){
            return count;
        },
        increment:function(){
            count+=1;
        },
        reset: function(){
            count = 0;
        } ,
        decrement: function(){
            count-=1;
        }
    }
}

// console.log(count);

let c1 = counter() 
console.log( c1.getCount() ); // 0 
c1.increment();
c1.increment()
c1.increment()
console.log( c1.getCount() ); // 3
c1.decrement()
c1.decrement()
console.log( c1.getCount() ); // 1
c1.reset()
console.log( c1.getCount() ); // 0
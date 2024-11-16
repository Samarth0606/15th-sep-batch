// step1 = select Image -> 4s
// step2 = filter Image -> 2s
// step3 = adding caption -> 5s



function step1(fn){ //paramter
    console.log("plzz wait i am selecting images...");
    setTimeout(function(){
        fn('selected image'); //calling
    } , 4000)
}

function step2(image , fn){ //paramter
    console.log(`plzz wait applying filter to the ${image}`);
    setTimeout(function(){
        fn('filtered image'); //arguments
    } , 2000)
}

function step3(filter , fn){
    console.log(`plzz wait i am adding caption to ${filter}`);
    setTimeout(function(){
        // console.log("captioned image");
        fn("captioned image") //arguments
    } , 5000)
}

function step4(caption){
    console.log(`plzz wait i am uploading ${caption}`);
    setTimeout(function(){
        console.log("finally uploaded");
    } , 3000)
    
}


2 
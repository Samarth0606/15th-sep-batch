// step1 - image selction - 4s
// step2 - filter - 2s


let step1 = ()=>{
    console.log(`plzz wait selecting image`);
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('selected image')
        } , 4000)
    })
}

let step2 = (image)=>{
    console.log(`plzz wait applying filter to ${image}`);
    return new Promise(function(resolve , reject){
        setTimeout(function(){
            resolve('filtered image')
        } , 2000)
    })
}

let step3 = (filter)=>{
    console.log(`plzz wait adding caption to ${filter}`);
    return new Promise(function(resolve , reject){
        setTimeout(function(){
            resolve('captioned image')
        } , 5000)
    })
}

let step4 = (caption)=>{
    console.log(`plzz wait uploading ${caption}`);
    return new Promise(function(resolve , reject){
        setTimeout(function(){
            resolve('image uploaded')
        } , 3000)
    })
}

step1()
.then(function(image){
    console.log(image);
    return step2(image)
})
.then(function(filter){
    console.log(filter);
    return step3(filter)
})
.then(function(caption){
    console.log(caption);
    return step4(caption)
})
.then(function(upload){
    console.log(upload);
})
.catch(function(err){
    console.log(err);
})


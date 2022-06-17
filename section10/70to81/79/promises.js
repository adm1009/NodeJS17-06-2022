const doWorkPromises = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        //   resolve([1,4,7])
        reject("there is an error")
    },2000)
})

doWorkPromises.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
})
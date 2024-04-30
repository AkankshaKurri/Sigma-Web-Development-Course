

//Promises
//The solution to the callback hell is promises.Apromise is a "promise of code execution". The code either executes or fails,in both the cases the subscriber will be notified


console.log('This is Promises');

//resolve and reject are predefined in JavaScript Engine
//resolve and reject are two callbacks provided by javascript itself.They are called like this
//resolve(value) --> If the job is finished successfully
//reject(error) --> If the job fails
//The promise object returned by the new Promise

// let prom1 = new Promise((resolve, reject) =>{
//     let a = Math.random();
//     if(a<0.5){
//         reject("No random number was not supporting you(1)") 
//     }
//     else{
//         setTimeout(() => {
//             console.log("Yes I am done(1)")
//             resolve("Bappa(1)")
//         },3000);
//     }
// })

//then: If we are interested only in successful completions,we can provide only one function argument to then():
//catch: If we are interested only in errors,we can use null as the first argument : .then(null,f) or we can use catch:
//finally: It is used to perform general cleanups

// prom1.then((a) => {
//     console.log(a)
// }).catch((err) => {
//     console.log(err)
// }).finally(
//     () => {   
// })


//Promise Chaining : We can chain promise and make them pass the resolved values to one another like this
//The ides is to pass the result through the chain of .then handlers
 
//example: promise.then(function(result)=>{
//     alert(result);
//     return 2;
// }).then......

//Here is the flow of execution
//1.The initial promise resolves in 1 seconds(Assumption)
//2.The next .then() handler is then called,which returns a new promise(resolved with 2 value)
//3. The next .then() gets the result of previous one and this keeps on going

//Every call to .then() returns a new promise whose value is passes to the next one and so on.We can even create custom promises inside.then()


//Attaching multiple handlers
//We can attach multiple handlers to one proise.THey dont pass the result to each other; instead they process it independently

//example: let p is a promise
// p.then(handler1)
// p.then(handler2)
// p.then(handler3)
//These three promises runs independently


//Promise API
//There are 6 static methods of Promise class:

//1.Promise.all(promises)--> Waits for all promises to resolve and returns the array of their results.If any one fails,it becomes the error and all other results are ignored.

//2.Promise.allSettled(promises)-->Waits for all the promises to settle and returns their results as an array of objects with status and value

//3.Promise.race(promises) --> Waits for the first promise to settle and its result/error becomes the outcome.

//4.Promise.any(promises) --> Waits for the first promise to fulfill(& not rejected),and its result becomes the outcome.THrows Aggregate Error if all the promises are rejected

//5.Promise.resolve(value) --> Makes a resolved promise with the given value

//6.Promise.reject(error) --> Makes a rejected promise with the given error

let prom1 = new Promise((resolve, reject) =>{
    let a = Math.random();
    if(a<0.5){
        reject("No random number was not supporting you(1)") 
    }
    else{
        setTimeout(() => {
            console.log("Yes I am done(1)")
            resolve("Bappa(1)")
        },3000);
    }
})

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if(a<0.5){
        reject("No random number was not supporting you(2)")
    }
    else{
        setTimeout(() => {
            console.log("Yes I am done(2)")
            resolve("Bappa(2)")
        }, 1000);
    }
})


//wait karega jab tak dono promises resolve hojaaye......fir array dega results ka.....,agar ek bhi fail hua toh error aayega aur baki sab result ignore hohaayega 
// let p3 = Promise.all([prom1,prom2])
// p3.then((a)=>{
//     console.log(a)
// }).catch((err)=>{
//     console.log(err)
// })


//result resolve ho ya reject ho ,dono ka status aur value dikhaayega console pe
// let p3 = Promise.allSettled([prom1,prom2])
// p3.then((a)=>{
//     console.log(a)
// }).catch((err)=>{
//     console.log(err)
// })


//jo pehla resolve hoga woh console mei print hoga
// let p3 = Promise.race([prom1,prom2])
// p3.then((a)=>{
//     console.log(a)
// }).catch((err)=>{
//     console.log(err)
// })

//wait karega pehla promise ko resolve hoojaye,fir bacha hua promise,dono promise ka result dikhaayega console pe.Agar dono promise reject hoga toh error throw karega
// let p3 = Promise.any([prom1,prom2])
// p3.then((a)=>{
//     console.log(a)
// }).catch((err)=>{
//     console.log(err)
// })

//promise resolve jo hoga pehle ,uska value 
// let p3 = Promise.resolve([prom1,prom2])
// p3.then((a)=>{
//     console.log(a)
// }).catch((err)=>{
//     console.log(err)
// })

//promise reject jo hoga pehle,uska value aayega
// let p3 = Promise.reject([prom1,prom2])
// p3.then((a)=>{
//     console.log(a)
// }).catch((err)=>{
//     console.log(err)
// })



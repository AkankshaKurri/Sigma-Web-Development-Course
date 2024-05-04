//There are some JavaSccript concepts which make the life of a developer extremely simple.We will discuss some of these in this chapter

//IIFE
//IIFE is a JavaScript Function that runs as soon as it is defines
//It is used to avoid polluting the global namespace, execute an async-await,etc.

async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}

//When we will write like this without function it will give an error
//await is only valid in async functions and the top level bodies of modules
//let a = await sleep()
//let b = await sleep()


//function banane ka aur use waha pe hi invoke  karne ka
// (async function main(){
//     let a = await sleep();
//     console.log(a)
//     let b= await sleep();
//     console.log(b)
// })();


//Destructuring : Destructuring assignment is used to unpack from an array, or properties from objects, into distinct variables
//e.g let [x,y] = [1,5]   //x will be assigned to 1, y will be assigned t0 5
//       console.log(x)     //Output : 1
//       console.log(y)     //Output : 5

//e.g. let [x1,y1, ...rest] = [1,5,7,8,9,10]     
//    console.log(x1,y1,rest)    //x1 will be assigned to 1, y1 will be assigned to 5, ...rest will be assigned to [7,8,9,10] 

//Similarly,we can destructure objects on the left hand side of the assignment
//e.g. let obj = { 
//         a:1 ,
//         b:2 ,
//         c:3
//      }

//let {a,b,c} = obj;    //obj values will be assigned to lefthandside
//console.log(a,b,c)    //Output: 1 2 3
   
// (async function main(){
//     let [x,y] = [1,5]  
//     console.log(x)     
//     console.log(y)   
   
//     let [x1,y1, ...rest] = [1,5,7,8,9,10]     
//     console.log(x1,y1,rest)      

//     let obj = { 
//         a:1 ,
//         b:2 ,
//         c:3
//     }

//     let {a,b,c} = obj;    
//     console.log(a,b,c)  
// })();





//Spread Syntax allows an iterable such as an array or string to be expande in places where zero or more arguments are expected.In an object literal,the sprerad syntax enumerates tthe properties of an objectand adds the key-value pairs to the object being created

//e.g. let arr = [1,4,6]
//      console.log(sum(arr[0],arr[1],arr[2]))
//      console.log(sum(...arr))   //(...arr--array kholke values deta hai)spread array

// function sum(a,b,c){
//     return a+b+c
// }

// (async function main() {
//     let arr = [1,4,6]
//     console.log(sum(arr[0],arr[1],arr[2]))
//     console.log(sum(...arr))

//     let nums = [1,2,7]
//     console.log(sum(nums[0],nums[1],nums[2]));
//     console.log(sum(...nums))
// })();




//Local,Global and Block Scopes
//JavaScript has three types of Scopes:

// 1.BLOCK SCOPE: let and const provide block level scope which means the variables declared inside a { } cannot be accesses from outside the block

// {
//     let a = 27;
// }    
// a is not available here

//2.LOCAL SCOPE : Variables declared within a JavaScript function,become local to the function

//3.GLOBAL SCOPE: A variable declared outside a function,becomes global





//Hoisting : Hoisting refers to thr process whereby thr interpreter appears to move the declarations to the top of the code before execution
//Variables can thus be referenced before they are declared in JavaScript

//JavaScript only hoists declarations,not initializations.The variable will be undefined until the line where its initialized is reached

//Hoisting with let and var
//With let and var hoisting is different
//Error if we use let or const,with var undefined is printed
//Function expressions and class expressions are not hoisted

(async function main() {
    // console.log(a1)    //Output: undefined 
    //  var a1 = 6;       //interpreter "var a1" ko top pe rakh deta hai

    // console.log(a1)   //Output: Error->Cannot access 'a1' before initialization
    // let a1 = 6;       

    // console.log(a1)   //Output: Error->Cannot access 'a1' before initialization
    // const a1 = 6; 
})();




 //for loop: loops a block of code no of times
 //for in loop:loops through the keys of an Object
 //for of loop:loops through the values of an object
 //while loop:loops a block based on a specific condition
//do-while loop:while loop variant which runs atleast once


//for loop
// let a=1
// for (let i = 0; i < 100; i++) {
//     console.log((a+i));
// }


//for in loop
// let obj={
//     "name":"harry",
//     "role":"Programmer",
//     "company":"Code with Harry AI"
// }

// for (const key in obj) {
//         const element = obj[key];          
//         console.log(key,element)           //keys and elemnts are printed
// }


// for (const key in obj) {
//     console.log(key)         //only keys are printed
// }


//for of loop
// for (const c of "Harry") {
//     console.log(c)
// }

//while loop
// let i = 0;
// while(i<6){
//     console.log(i)
//     i++;
// }

//do while loop
let i = 0;
do {
    console.log(i)        //executed atleast once
    i++; 
} while (i<6);



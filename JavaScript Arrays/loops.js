let a = [1,93,5,6,88]

//for loop
// for (let i = 0; i < a.length; i++) {
//     const element = a[i];
//     console.log(element);
// }


//foreach loop:calls a function,once for each array element
//  a.forEach((value,index,arr) => {
//      console.log(value,index,arr)
//  })


//for in loop:for in loop can be used to get the keys from an array

// let obj={
//     a:1,
//     b:2,
//     c:3
// }

// for (const key in obj) {
//     const element = obj[key];
//     console.log(key,element)
// }


//for of loop:for of loop can be used to get the values from an array

// for (const value of a) {
//     console.log(value);
// }

//map(): creates a new array by performing some operation on each  array element

let arr=[1,13,5,7,11]

//let newArr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)
// }

let newArr = arr.map((e)=>{
     return e**2
})
console.log(newArr)


//filter():filter an array with values that passes a test.Creates a new array
const greaterThanSeven = (e)=>{
    if(e>7){
       return true
    }
    return false
}
console.log(arr.filter(greaterThanSeven))


//reduce method:Reduces an array to a single value

let arr2=[1,2,3,4,5,6]
const red =(a,b)=>{
    return a*2
}

console.log(arr2.reduce(red))

//Array.from:Used to create an array from any other object

console.log(Array.from("Akanksha"))

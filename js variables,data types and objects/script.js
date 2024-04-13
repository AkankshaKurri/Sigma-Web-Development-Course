console.log("This is introduction about javascript variables,data types and objects")                 //console

//var is globally scope 
var a = 5;
var b = 8;
var c = "Akanksha";  //javasccript apne aap pata karta hai datatype

console.log(a + b);
console.log(typeof a , typeof b, typeof c);    //give datatype of variable


//variable name must start with underscore,dollar,or a letter

//"const" variable is fixed,it cannot be changed
//"var" can be changed
const a1 = 6;

//let ka scope block mei hi rehta hai
let b1=10;
let b2=20;
{
    let b1=30
    console.log(b1)       //30 will be shown on console,and then 10 will be shown
}
console.log(b1)

//var ka scope globally rehta hai
var c1=40;
{
    var c1= 50
    console.log(c1)     //50 will be shown on console,and then 50 will be shown 
}
console.log(c1)

//Seven primitive data types
//1.Null
//2.Number
//3.String
//4.Symbol
//5.Undefined
//6.Boolean
//7.BigInt


let x = "Harry Bhai"
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;     //type of null is object         

console.log(x , y , z , p , q , r);
console.log(typeof x ,typeof  y ,typeof z , typeof p ,typeof q ,typeof r);


//object has key-value pairs
let o={
    "name":"Harry",
    "job code" : 5600,
    "is_handsome" : true
}

console.log(o);
o.salary = "100 crores" //object can also be altered
console.log(o);
o.salary = "500 crores"
console.log(o);

//practice set
//create a variable of type string and try to add a number to it
var x1 = "123456789"
console.log(x1)

//use typeof operator to find the datatype of the string in last question
console.log(typeof x1)

//create a const object in javascript .Can you change it to hold a number later?
const obj = {
    num1 : undefined
}
console.log(obj)

//try to add a new key to the const object in problem3,were you able to do it.
obj.num2 = 20
console.log(obj)

//write a javascript program to create a word-meaning dictionary of 5 words
const obj2 ={
    Accomplish : "achieve or complete successfully",
    Attain : "succeed in achieving",
    Adapt :	"make something suitable for a new use or purpose",
    Affordable : "reasonably priced",
    Accompany :	"go somewhere with someone as a companion"
}
console.log(obj2);

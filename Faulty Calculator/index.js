/* Create a faulty calculator using Javascript.This faulty calculator does following:
1.It takes two numbers as input from the user
2.It performs wrong operations as follows:

+ ------> -
- ------> /
* ------> +
| -------> **

It performs wrong operation 10% of the times
/*/

console.log("This is a calculator")

let Firstnum = prompt("enter first number")
let Secondnum = prompt("enter second number")
let operation = prompt("enter operation")

let random=Math.random()
console.log(random)
if(random < 0.1)
{
    //perform wrong calculation
    if(operation=="+"){
        console.log("Subtraction is:",Firstnum - Secondnum) 
    }
    else if(operation=="-"){
        console.log("Division is:",Firstnum /Secondnum)
    }
    else if(operation=="*"){
        console.log("Addition is:",Firstnum + Secondnum)
    }
    else if(operation =="/"){
        console.log("Exponent is:",Firstnum ** Secondnum)
    }
    else{
        console.log(eval(Firstnum + operation +Secondnum))
    }  
} 
else{
    //perform right calculatiom
    console.log(eval(Firstnum + operation +Secondnum))
}   

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors
//Go to above website for varius types of errors in javascript

let a = prompt("Enter first number")
let b = prompt("Enter second number")
let sum = parseInt(a) + parseInt(b)
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Please enter a number")
}
console.log("The sum is", sum)

function main(){
     let x=1;
     try {
         console.log("The multiplication with x is",sum*x);
         return true
     } catch (error) {
         console.log("Its an error")
         return false
     }
     finally{
         console.log("All files are being closed and database connection also being closed")
     }
}

let c = main()


//function ke andar jab hum try,catch,finally use karenge toh try ya catch ho finally run hoga agar try ya catch block mei return statement hoga--
//   try mei return hoga...
//   toh control jab return se bahar aayega...
//   control finally ke paas jaayega aur code execute hoga....

// agar bina function ke use karoge 
//



 function factorial(number){
    let arr=Array.from(Array(number+1).keys())    //yeh array banayega,aur sirf keys lega,(number+1 => 0,1,2,3,4)
    let c= arr.slice(1).reduce((a,b)=> a*b)       //(slice(1)=> 1,2,3,4))
    return c
 }
 fact=factorial(4)
 console.log(fact)


 function facfor(num){
   let fact=1;
   for (let i = 1; i <= num; i++) {
      fact=fact*i;
   }
   return fact;
 }
 factor=facfor(4)
 console.log(factor)

 



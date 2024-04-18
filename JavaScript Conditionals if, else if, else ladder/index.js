console.log("Hello I am conditional tutorial") //then click on run

let age = 21;
let grace=2;
//Arithmetic Operators
console.log((age+grace))     //1.Addition
console.log((age-grace))     //2.Subtraction
console.log((age*grace))     //3.Multiplication
console.log((age/grace))     //4.Division
console.log((age**grace))    //5.Exponentiation
console.log((age%grace))     //6.Modulus

if((age+grace)>18){                     //If......else......ladder
    console.log("You can drive");
}
else{
    console.log("You cannot drive");
}

let num=10;
console.log((num++)) ;     //7.Increment:Pehle number print hoga fir increment hoga
console.log(num);
console.log((num--));     //8.Decrement:Pehle number pprint hoga fir decrement hoga
console.log(num);

//Assignment Operators
let num1=2; //1.(=) equal to operator
let num2=3;

num1+=num2                //2.num1=num1+num2 (+=) operator 3+2=5
console.log(num1)
num1-=num2                //3.num1=num1-num2 (-=) operator 5-3=2
console.log(num1)
num1*=num2                //4.num1=num1*num2 (*=) operator 2*3=6
console.log(num1)
num1/=num2                //5.num1=num1/num2 (/=) operator 6/3=2
console.log(num1)
num1%=num2                //6.num1=num1%num2 (%=) operator 2%3=2
console.log(num1)
num1**=num2               //7.num1=num1**num2 (**=) operator 2**3=8
console.log(num1)

//Comparison Operators 
if((num1==num2)){         //1.(==) equal to operator   8==3       
    console.log("Both numbers are equal",num1,num2);
}
else{
    console.log("Both numbers are not equal",num1,num2);
}

if((num1!=num2)){         //2.(!=) not equal to operator  8!=3    
    console.log("Number is not equal",num1,num2);
}
else{
    console.log("Number is equal",num1,num2);
}

let num3=3;
let num4=3;
if((num3===num4)){          //3.(===)equal value and type       
    console.log("Both numbers have equal value and type",num3,typeof(num3),num4,typeof(num4));
}
else{
    console.log("Both numbers do not have equal value and type",num3,typeof(num3),num4,typeof(num4));
}


a=8;
b=18;
console.log((a>b) ? a:b);      //9.(?)ternary operator:condition check hoga,condition true rahega toh left wala print hoga,condition false rahega toh right wala print hoga...

//4.(!==)not equal value and equal type
//5.(>)greater than
//6.(<)less than
//7.(>=)greater than or equal to
//8.(<=)less than or equal to


//Logical Operator
//1.and  (&&)   dono true hona chahiye
//2.or (||)     ek true hona chahiye
//3.not (!)     true rahega toh false dega,false rahega toh true dega

//if.....elseif....else ladder
let gender="other";
if((gender=="female")){
    console.log("female")
}
else if(gender=="--"){
    console.log("Are you kidding?")
}
else if(gender=="other"){
    console.log("Other")
}
else{
    console.log("male")
}

//practice set

//1.Use logical operators to find whether the age of a person lies between 10 and 20

let age_of_person=10;
if(age_of_person==10 || age_of_person==20){
    console.log("age of a person lies between 10 and 20");
}
else{
    console.log("age of a person does not lies between 10 and 20");
}

//demonstrate the use of sswitch case statements in javascript

//write a javascript program to find whether a number is divisible by 2 and 3
let x=5;
if(((x/=2)==0) && ((x/=3)==0)){
    console.log("a number is divisible by 2 and 3")
}
else{
    console.log("a number is not divisible by 2 and 3")
}

//write a javascript program to find whether a number is divisible by either 2 or 3
let y=6;
if( ((y/=2)==0) || ((y/=2)==0) ){
    console.log("a number is divisible by 2")
}
else{
    console.log("a number is divisible by 3")
}

//print "you can drive" or "you cannot drive" based on age being greater than 18 using ternary operator

age_in_number=17;

console.log((age_in_number>18) ? "you can drive":"you cannot drive")

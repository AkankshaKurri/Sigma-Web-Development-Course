console.log("Javascript Strings tutorial")

let a="Harry"
console.log(a)     //for printing string

console.log(a[0]); //for printing each character of a string
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);

console.log(a.length);  //this prints the length of the string

let real_name ="Akanksha"
let friend = "Uma"
console.log("My name :"+ real_name);
console.log("My friend name:"+ friend);//ismei doublequote(" ") use kiya hai

//Template Literals
//You can also use single quote and double quote inside backtic
console.log(`His 'name' "is" ${real_name} and his friend name is ${friend}`)    //ismei backtic(` `) use kiya hai

//Escape Sequence Characters
a="Akanksha"               //only double quotes
console.log(a)
 
a1='Akanksha'              //only single quote
console.log(a1)

a2=`Akanksha'Kurri`        //backtic
console.log(a2)
 
a3=`"Akanksha"Kurri"`     //backtic
console.log(a3)

a4="Akanksha\"Kurri"      //escape sequence 
console.log(a4)

a5="Akanksha \n Kurri"      //new line
console.log(a5)

a6="Akanksha \t Kurri"      //Tab
console.log(a6)

a7=" Akanksha Ku\rrri"      //Carriage Return
console.log(a7)


//Strings are immutable.In order to access the character at an index we use the following syntax

let b="Ganpati Bappa"
console.log(b.toUpperCase())      //convert string into uppercase

console.log(b.toLowerCase())      //covert string into lowercase

console.log(b.length)             //gives length of the string

console.log(b.slice(8,13))         //print character from 8 to 13,13 not included

console.log(b.slice(7))           //print character from 7 to end

console.log(b.replace("Ganpati","Mazha Ladka"))   //replace

console.log(b.concat("Friend",a))    //concatenate

console.log(b.trim())                //Removes whitespaces

console.log(b.charAt(0))             //gives character at specified index

console.log(b.indexOf("Ba"))         //gives index of specified character

console.log(b.startsWith("Ba"))      //checks whether the specified character starts with that character in string or not?
console.log(b.startsWith("Ga"))

console.log(b.endsWith("pa"))       //checks whether the specified character ends with that character in string or not?








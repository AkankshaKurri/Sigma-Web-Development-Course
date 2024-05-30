//First always install package.json
//Write this "npm init -y"

const fs = require("fs")     //Alternate way: const fs = require("fs/promises")
// console.log(fs);

//Sab fs ka functions terminal pe print hoga




//Creating a file
// console.log("starting")
// fs.writeFileSync("akanksha.txt" , "Akanksha is a good girl")
// console.log("ending")

// PS C:\Users\Akanksha kurri\OneDrive\Documents\Documents\MyFiles\Sigma Web Development Course\Working with Files fs and path Modules> node ./main.js
// starting
// ending






//Creating a file
// console.log("starting")
// fs.writeFile("akanksha2.txt", "Akanksha will crack google interview" , ()=>{
//     console.log("File writing Done")
// })
// console.log("ending")

// PS C:\Users\Akanksha kurri\OneDrive\Documents\Documents\MyFiles\Sigma Web Development Course\Working with Files fs and path Modules> node ./main.js
// starting
// ending
// File writing Done





//Creating a file and also reading a file
// console.log("starting")
// fs.writeFile("akanksha2.txt", "Akanksha will crack google interview" , ()=>{
//     console.log("File writing Done")
//     fs.readFile("akanksha2.txt", (error,data)=>{
//         console.log(error,data.toString())
//     })
// })
// console.log("ending")

// PS C:\Users\Akanksha kurri\OneDrive\Documents\Documents\MyFiles\Sigma Web Development Course\Working with Files fs and path Modules> node ./main.js
// starting
// ending
// File writing Done
// null Akanksha will crack google interview



//Callback Hell
//If you want to do anything again and again ,you will write that code again and again
//that means in our case if we want to red the file agin and again, then we will write readfile call dunction again and again.This is not convenient way.This is caled as callback hell.



//Appending in file
console.log("starting")
fs.appendFile("akanksha2.txt", " Learn DSA Everyday" , (error , data)=>{
    console.log(error, data)
    console.log("Appending in file done")
})
console.log("ending")

// PS C:\Users\Akanksha kurri\OneDrive\Documents\Documents\MyFiles\Sigma Web Development Course\Working with Files fs and path Modules> node ./main.js
// starting
// ending
// null undefined
// Appending in file done








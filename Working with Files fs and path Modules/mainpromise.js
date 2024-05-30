 //yaahape hum fs module ko impoet kar rhe hai
import fs from "fs/promises"  

//abh hum module ke andar hai
//toh hum directly await kar skate hai 
let a = await fs.readFile("akanksha.txt")  

let b = await fs.appendFile("akanksha.txt" ,"\nThis is amazing promise")

console.log(a.toString() , b)

// PS C:\Users\Akanksha kurri\OneDrive\Documents\Documents\MyFiles\Sigma Web Development Course\Working with Files fs and path Modules> node ./mainpromise.js
// Akanksha is a good girl
// undefined
import path from "path"

//console.log(path)
//You wil get all functions name

let mypath = "C:\\Users\\Akanksha kurri\\OneDrive\\Documents\\Documents\\MyFiles\\Sigma Web Development Course\\Working with Files fs and path Modules\\akanksha.txt"

//console.log(path.extname(mypath))

// PS C:\Users\Akanksha kurri\OneDrive\Documents\Documents\MyFiles\Sigma Web Development Course\Working with Files fs and path Modules> node ./aboutpath.js
// .txt

//console.log(path.dirname(mypath))

// PS C:\Users\Akanksha kurri\OneDrive\Documents\Documents\MyFiles\Sigma Web Development Course\Working with Files fs and path Modules> node ./aboutpath.js
// C:\Users\Akanksha kurri\OneDrive\Documents\Documents\MyFiles\Sigma Web Development Course\Working with Files fs and path Modules

//console.log(path.basename(mypath))

// PS C:\Users\Akanksha kurri\OneDrive\Documents\Documents\MyFiles\Sigma Web Development Course\Working with Files fs and path Modules> node ./aboutpath.js
// akanksha.txt

console.log(path.join("C:/" , "Akanksha kurri//akanksha.txt"))

// PS C:\Users\Akanksha kurri\OneDrive\Documents\Documents\MyFiles\Sigma Web Development Course\Working with Files fs and path Modules> node ./aboutpath.js
// C:\Akanksha kurri\akanksha.txt




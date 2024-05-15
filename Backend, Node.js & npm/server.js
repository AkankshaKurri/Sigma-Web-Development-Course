//Node js: Node js is the version8 engine of the JavaScript
//npm: Whenever we have created nodejs package,then we would like to install some packages in node mods  by installing npm inside it

//If you want to run javascript in backend,then you need nodejs and npm

console.log("Hello World!")

//Open terminal
//PS C:\Users\Akanksha kurri\OneDrive\Documents\Documents\MyFiles\Sigma Web Development Course\Backend, Node.js & npm> node ./server.js
// Hello World!








//we have to init npm, so that we can install various packages

//PS C:\Users\Akanksha kurri\OneDrive\Documents\Documents\MyFiles\Sigma Web Development Course\Backend, Node.js & npm> npm init
//This utility will walk you through creating a package.json file.
//It only covers the most common items, and tries to guess sensible defaults.
//See `npm help init` for definitive documentation on these fields
//and exactly what they do.
//Use `npm install <pkg>` afterwards to install a package and
//save it as a dependency in the package.json file.
//Press ^C at any time to quit.
// package name: (backend,-node.js-&-npm) javascript
//version:(1.0.0)                                                                           
// description: Sigma web development course
// entry point: (server.js)
// test command:
// git repository: 
// keywords: Sigma
// author: Akanksha
// license: (ISC)
// About to write to C:\Users\Akanksha kurri\OneDrive\Documents\Documents\MyFiles\Sigma Web Development Course\Backend, Node.js & npm\package.json:

// {
//     "name": "javascript",
//     "version": "1.0.0",
//     "description": "Sigma web development course",
//     "main": "server.js",
//     "scripts": {
//       "test": "echo \"Error: no test specified\" && exit 1",
//       "start": "node server.js"
//     },
//     "keywords": [
//       "Sigma",
//       "course"
//     ],
//     "author": "Akanksha",
//     "license": "ISC"
//   }
  
//   Is this OK? (yes) yes
//package.json file will be created






//In this way you  can install packages

//Type "npm package for time" in google
//Go to first website "npm date and time"
//Search "slug"
//Go to "slugify"
//Their you will see install icon,copy that url

// PS C:\Users\Akanksha kurri\OneDrive\Documents\Documents\MyFiles\Sigma Web Development Course\Backend, Node.js & npm> npm install npm i slugify
// added 3 packages, and audited 211 packages in 36s
// 24 packages are looking for funding
//   run `npm fund` for details
// found 0 vulnerabilities

//when you will upload your file in github,delete node_modules
//you can re-install by typing this "npm install" in terminal










var slugify = require('slugify')
let a = slugify('some string') 
console.log(a)
const b = slugify('some string', '_') 
console.log(b)

// PS C:\Users\Akanksha kurri\OneDrive\Documents\Documents\MyFiles\Sigma Web Development Course\Backend, Node.js & npm> node ./server.js
// some-string
// some_string
//Slugify modules will be created










//Type in google "node.js express"
//Go to first website " Express - Node.js web application framework "
//copy that url "npm install express"

//PS C:\Users\Akanksha kurri\OneDrive\Documents\Documents\MyFiles\Sigma Web Development Course\Backend, Node.js & npm> npm install express
// added 64 packages, and audited 275 packages in 11s
// 35 packages are looking for funding
//   run `npm fund` for details
// found 0 vulnerabilities

//All express modules will be created






//Further reading : https://nodejs.org/en/learn/getting-started/introduction-to-nodejs









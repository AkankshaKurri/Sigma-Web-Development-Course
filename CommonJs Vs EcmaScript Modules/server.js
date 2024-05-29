//we will init npm

// PS C:\Users\Akanksha kurri\OneDrive\Documents\Documents\MyFiles\Sigma Web Development Course\CommonJs Vs EcmaScript Modules> npm init -y
// Wrote to C:\Users\Akanksha kurri\OneDrive\Documents\Documents\MyFiles\Sigma Web Development Course\CommonJs Vs EcmaScript Modules\package.json:

// {
//   "name": "commonjs-vs-ecmascript-modules",
//   "version": "1.0.0",
//   "main": "index.js",
//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },
//   "keywords": [],
//   "author": "",
//   "license": "ISC",
//   "description": ""
// }


//here we will install packages,node_modules

// PS C:\Users\Akanksha kurri\OneDrive\Documents\Documents\MyFiles\Sigma Web Development Course\CommonJs Vs EcmaScript Modules> npm i express jsonwebtoken dotenv
// added 79 packages, and audited 80 packages in 6s
// 13 packages are looking for funding
//   run `npm fund` for details
// found 0 vulnerabilities



//type "nodejs.org tutorials" in google
//Go to first website "Introduction to nodejs"
//An Example Node.js Application
//The most common example Hello World of Node.js is a web server:


// const { createServer } = require('node:http');
// const hostname = '127.0.0.1';
// const port = 3000;
// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


// PS C:\Users\Akanksha kurri\OneDrive\Documents\Documents\MyFiles\Sigma Web Development Course\CommonJs Vs EcmaScript Modules> node ./server.js.
// Server running at http://127.0.0.1:3000/


// PS C:\Users\Akanksha kurri\OneDrive\Documents\Documents\MyFiles\Sigma Web Development Course\CommonJs Vs EcmaScript Modules> npm install --global nodemon
// added 31 packages in 7s
// 4 packages are looking for funding
//   run `npm fund` for details

// PS C:\Users\Akanksha kurri\OneDrive\Documents\Documents\MyFiles\Sigma Web Development Course\CommonJs Vs EcmaScript Modules> nodemon server.js 

//nodemon restart karta hai jab-jab hum micro changes karte hai
//Lekin yeh apne pc mei nhi chl rha hai


//Now we will import variables from mymodule.js
// import {a,b,c,d,e} from "./mymodule.js"
// console.log(a,b,c,d,e)

// PS C:\Users\Akanksha kurri\OneDrive\Documents\Documents\MyFiles\Sigma Web Development Course\CommonJs Vs EcmaScript Modules> node ./server.js
// 1 2 3 4 5

// import obj from "./mymodule.js"
// console.log(obj)

// PS C:\Users\Akanksha kurri\OneDrive\Documents\Documents\MyFiles\Sigma Web Development Course\CommonJs Vs EcmaScript Modules> node ./server.js
// 1 2 3 4 5
// { x: '10', y: '20', z: '30' }

// import akanksha from "./mymodule.js"   //akanksha naam ka kuch nhi hai yeh "mymodule.js" mei
// console.log(akanksha)                  //default naam ke object ya variable ko hum kuch bhi naam de ke import kar sakte hai

// PS C:\Users\Akanksha kurri\OneDrive\Documents\Documents\MyFiles\Sigma Web Development Course\CommonJs Vs EcmaScript Modules> node ./server.js
// 1 2 3 4 5
// { x: '10', y: '20', z: '30' }
// { x: '10', y: '20', z: '30' }


//Here if you want to import "mymodule2.js" then we can import from that "mymodule2.js" like this...

// const a = require("./mymodule2.js")
// console.log(a)

// PS C:\Users\Akanksha kurri\OneDrive\Documents\Documents\MyFiles\Sigma Web Development Course\CommonJs Vs EcmaScript Modules> node ./server.js
// { a: 1, b: 2, c: 3 }

// PS C:\Users\Akanksha kurri\OneDrive\Documents\Documents\MyFiles\Sigma Web Development Course\CommonJs Vs EcmaScript Modules> node ./server.js
// 56

// const a = require("./mymodule2.js")
// console.log(a , __dirname)

// PS C:\Users\Akanksha kurri\OneDrive\Documents\Documents\MyFiles\Sigma Web Development Course\CommonJs Vs EcmaScript Modules> node ./server.js
// 56 C:\Users\Akanksha kurri\OneDrive\Documents\Documents\MyFiles\Sigma Web Development Course\CommonJs Vs EcmaScript Modules

const a = require("./mymodule2.js")
console.log(a , __dirname, __filename)

// PS C:\Users\Akanksha kurri\OneDrive\Documents\Documents\MyFiles\Sigma Web Development Course\CommonJs Vs EcmaScript Modules> node ./server.js
// 56 C:\Users\Akanksha kurri\OneDrive\Documents\Documents\MyFiles\Sigma Web Development Course\CommonJs Vs EcmaScript Modules C:\Users\Akanksha kurri\OneDrive\Documents\Documents\MyFiles\Sigma Web Development Course\CommonJs Vs EcmaScript Modules\server.js
// PS C:\Users\Akanksha kurri\OneDrive\Documents\Documents\MyFiles\Sigma Web Development Course\CommonJs Vs EcmaScript Modules> 

// yeh sab directory name, file name, require ,module --> ek function mei already rehta hai --> nodejs ke function mei
//REMEMBER THIS

// (function(exports,require,odule,__dirname,__filename){
//     //Module code actually lives here
// });







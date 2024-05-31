// package.json hume pehle install karna hoga
//write in terminal "npm init -y"



//Go to Nodejs website , then go to intro to js , then copy that code and paste it 


// const { createServer } = require('node:http');
// const hostname = '127.0.0.1';
// const port = 3000;
// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World23');
// });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });






// hume baar baar page reload karna na pade uske liye nodemon install karne ka

// PS C:\Users\Akanksha kurri\OneDrive\Documents\Documents\MyFiles\Sigma Web Development Course\Introduction to Express Js> npm i --global nodemon
// changed 29 packages in 6s
// 4 packages are looking for funding
//   run `npm fund` for details


//Agar yeh chalate time error aaya toh
//open windows powershell as administrator
//Get-ExecutionPolicy    # You should get 'Restricted'
// Set-ExecutionPolicy Unrestricted
// Get-ExecutionPolicy   # You should get 'Unrestricted'


// PS C:\Users\Akanksha kurri\OneDrive\Documents\Documents\MyFiles\Sigma Web Development Course\Introduction to Express Js> nodemon main.js

// [nodemon] 3.1.2
// [nodemon] to restart at any time, enter `rs`
// [nodemon] watching path(s): *.*
// [nodemon] watching extensions: js,mjs,cjs,json
// [nodemon] starting `node main.js`
// Server running at http://127.0.0.1:3000/


// npm i express --> to install express js
//bpm i express@4  --> to change the version






//go to express js website, then go to "getting started", then go to "Hello world"
const express = require('express')
const app = express()
const port = 3000

//go to express js website, then go to "getting started", then go to "static files" , copy that and paste it
//Agar aapko file dikhana hoga public ke liye
//toh ek public folder banane ka aur usmei sab files daal dene ka
app.use(express.static('public'))

// app.get or app.post or app.delete or app.put(path,handler)
app.get('/', (req, res) => {
  res.send('Hey!')
})

app.get('/home', (req, res) => {
  res.send('Home')
})

app.get('/about', (req, res) => {
  res.send('About Us')
})

app.get('/contact', (req, res) => {
  res.send('Hello Contact us')
})

app.get('/blog', (req, res) => {
  res.send('Hello blog')
})

// app.get('/blog/Intro-to-Js', (req, res) => {
//   //logic to fetch Intro-to-Js from db
//   res.send('Introduction to Javascript')
// })

// app.get('/blog/Intro-to-Python', (req, res) => {
//   //logic to fetch Intro-to-Python from db
//   res.send('Introduction to Python')
// }

// Using parameters and queries
app.get('/blog/:slug', (req, res) => {
  // For URL:http://localhost:3000/blog/Intro-to-rishika?mode=dark&region=in
  console.log(req.params)  //gives output as { slug: 'Intro-to-rishika' }
  console.log(req.query)   //gives output as { mode: 'dark', region: 'in' }
  res.send(`Hello ${req.params.slug}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})





//express js use karo
//woh saari files aur modules aur package.json ko protect karti hai public se
//if you want any file to access by public put that in public folder
//and use this code -->
// app.use(express.static('public'))

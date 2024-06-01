// npm init -y  --> to install package

const express = require('express')
const fs = require("fs")
const blog = require('./routes/blog')
const app = express()
const port = 3000

// app.use(express.static('public'))
app.use("/blog" , blog)

//Middleware 1 (Middleware function logger)
app.use((req, res, next)=>{
  console.log(req.headers)  ///header aayega request ka
  req.akanksha = "I am akanksha"
  fs.appendFileSync("logs.txt" , `\n${Date.now()} is a ${req.method}` )  //"logs.txt" file mei append hoga
  console.log(`${Date.now()} is a ${req.method}`) 
  // res.send(`Hello World Middleware 1 ${req.akanksha}`)
  next()
})

//Middleware 2 (Middleware function logger)
app.use((req, res, next)=>{
  console.log('Middleware 2')
  req.akanksha = "I am akanksha kurri"
  res.send(`Hello World Middeware 2 ${req.akanksha}`)
  next()
})

// "/" request aayega aur "Hello World!" response jaayega
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// "/about" request aayega aur "Hello About!" response jaayega
app.get('/about', (req, res) => {
  res.send('Hello About!')
})

// "/contact" request aayega aur "Hello Contact!" response jaayega
app.get('/contact', (req, res) => {
  res.send('Hello Contact!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


//jiska request baadmei modify hoga woh middleware chalega
//e.g. middleware 1 --> req.akanksha ="I am akanksha"
//e.g. middleware 2 --> req.akanksha ="I am akanksha kurri"
//toh middleware 2 chalega

//There are various types of middleware
//You can try it out those various types of middleware from "express.js" website
//Go to "guiding"
//Go to "Using Middleware"


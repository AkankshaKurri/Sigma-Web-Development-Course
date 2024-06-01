// Method and description
// 1.res.download() --> Prompt a file to be downloaded
// 2.res.end() --> End the response process
// 3.res.json() --> Send a JSON response
// 4.res.jsonp() --> Send a JSON response with JSONP support
// 5.res.redirect() --> Redirect a request
// 6.res.render() -->Render a view template
// 7.res.send() --> Send a response of  various types
// 8.res.sendFile() -->Send a file as an octet stream
// 9.res.sendStatus() -->Set the response status codeand send its string representationas the response body






//npm init -y --> to install package.json
//npm i express --> to install express.js
//npm install --global nodemon  --> to install nodemon
//nodemon ./main.js --> to run the file 




//For Hello world example: go to express js website,then go to "getting started", then go "hello world", copy that example and paste it
const express = require('express')      
const blog = require('./routes/blog')   
const shop = require('./routes/shop')
const app = express()              //then it will be passes to variable("app")
const port = 3000                  //this is port number



//It will use public folder and in that public folder it will run that file(mypage.html)
app.use(express.static("public"))

app.use('/blog', blog)  //iska matlab yeh hai ke '/blog' ko jab bhi aap likhoge browser pe, toh woh "blog" ko handle karega(matlab routes ke andar "blog.js" file hai  usko handle karega)

app.use('/shop', shop)  //iska matlab yeh hai ke '/shop' ko jab bhi aap likhoge browser pe, toh woh "shop" ko handle karega(matlab routes ke andar "shop.js" file hai usko handle karega)



//get request
app.get('/', (req, res) => {
  console.log("Hey it's a get request")  
  res.send('Hello World Get')   //This will be printed on webpage
})

//Serving html files(mpage.html)
//You should use "rs.sendFile"
app.get('/index', (req, res) => {
  console.log("Hey it's index")  
  res.sendFile('templates/index.html', {root:__dirname}) //Here it will find the directory and then it will print the text which is present in index.html file
})

//If you want data in json format
//You should use "res.json"
app.get('/api', (req, res) => {  
  res.json({a: 1, b:2 , c: 3 , d:4, name:["akanksha", "Uma"]})
})

//post request
app.post('/', (req, res) => {
    console.log("Hey it's a post request")
    res.send('Hello World Post')
})

//Put request update karne ke liye use hoti hai
app.put('/', (req, res) => {
    console.log("Hey it's a put request")
    res.send('Hello World Put')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})







//Chaining of requests
// app.get('/', (req, res) => {
//   console.log("Hey it's aget request")  
//   res.send('Hello World Get')
// }).post('/', (req, res) => {
//     console.log("Hey it's a post request")
//     res.send('Hello World Post')
// }).put('/', (req, res) => {
//     console.log("Hey it's a put request")
//     res.send('Hello World Put')
// })
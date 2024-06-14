// npm init -y --> to install package.json
// npm i express --> to install expressjs
// npm i --global nodemon --> to install nodemon
//npm i ejs -->  to install embedded javascript templating
// https://github.com/mde/ejs/wiki/Using-EJS-with-Express --> here is the info about Using EJS with Express

//Go to express js website. And copy that "Hello World" code and paste it
const express = require('express')
const app = express()
const port = 3000

//views wala folder bana 
//aur usmei sab ejs wala file bana
app.set('view engine', 'ejs');

// ejs ke wajah se hum variable pass kar sakte hai
//aur object bhi paas kar sakte hai
app.get('/', (req, res) => {
  let siteName = "Adidas"
  let searchText = "Search Now"
  let arr = [1,2,3]
  //render ke wajah se particular file mei output show hoga
  res.render("index" , {siteName: siteName, searchText:searchText, arr}) //render use karne ka
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
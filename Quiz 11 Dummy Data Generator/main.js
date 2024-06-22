const express = require('express')
const mongoose = require('mongoose');
const app = express()
mongoose.connect('mongodb://127.0.0.1:27017/company');
const employee = require('./models/employee')
const port = 3000

app.set('view engine', 'ejs');

const getRandom =(arr)=>{
  let rno = Math.floor(Math.random() * (arr.length - 1))
  return arr[rno]
}

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/generate', async (req, res) => {
  //Clear All data
  await employee.deleteMany({})

  // generate random data
  let randomNames = ["Akanksha","Lalit","Aditi","Ramesh","Uma","Sarojini","Rishika","Vedant"]
  let randomLang =  ["Python","Java","C++","Javascript","Kotlin"]
  let randomCities = ["MUmbai","Pune","Kolkata","Mysore","Bilaspur"]

  for (let index = 0; index < 10; index++) {
    let e = await employee.create({
      name : getRandom(randomNames),
      salary : Math.floor(Math.random()* 20000),
      language : getRandom(randomLang),
      city : getRandom(randomCities),
      isManager : Math.random()>0.5?true:false
    })
    
  }
  res.render('index');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
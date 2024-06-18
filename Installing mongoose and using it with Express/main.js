//Mongoose 

import mongoose from "mongoose";
import express from "express";
import {Todo} from "./models/Todo.js";

let conn = await mongoose.connect("mongodb://localhost:27017/Todo");

//express server
const app = express()
const port = 3000

app.get('/', (req, res) => {
  // A model is a class with which we construct documents. In this case, each document will be a Todo with properties and behaviors as declared in our Todoschema. Let's create a Todo document.
  const todo = new Todo({desc:"Description of this Todo", isDone:false, days: Math.floor(Math.random()*45 + Math.random()*5)}) 
  //Each document can be saved to the database by calling its save method.
  todo.save() 
  res.send('Hello World!')
})

app.get('/a', async (req, res) => {
  //Find
  let todo = await Todo.findOne({})
  res.json({title:todo.title , desc:todo.desc})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

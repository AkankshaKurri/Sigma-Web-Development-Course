## Mongoose 

Link for mongoose: "https://mongoosejs.com/"
Link for Schema Types: "https://mongoosejs.com/docs/schematypes.html"

Step 1: Install mongoose

```
npm install mongoose
```

Step 2: Write this code in "Todo.js" file.Import mongoose.Here it will create a Todo Schema
       
```
import mongoose from "mongoose";
const TodoSchema = new mongoose.Schema({
    title: String,
    desc: String,
    isDone: Boolean
});
export const Todo = mongoose.model('Todo', TodoSchema);
```

Step 3: Write this code in "main.js"

```
import mongoose from "mongoose";
import express from "express";
import {Todo} from "./models/Todo.js";

let a = await mongoose.connect("mongodb://localhost:27017/Todo");

//express server
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const todo = new Todo({title:"Hey first Todo", desc:"DEscription of this Todo", isDone:false}) 
  todo.save() 
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

Step 4: Run this code in terminal
        Write this in package.json > script > dev:"nodemon main.js".

```
  npm run dev
```

Step 5: Go to this website "http://localhost:3000/"
        When you will load this website documents will be added in "Todos" collection



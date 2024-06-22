## Installation

Step 1: Run this command in terminal to install "package.json"
```
npm init -y
```

Step 2: Run this command in terminal to install "express"
```
npm i express
```

Step 3: Run this command in terminal to install "mongoose"
```
npm i mongoose
```

Step 4: Run this command in terminal to install "ejs"
```
npm i ejs
```

Step 5: Run this command in terminal to install "nodemon"
```
npm i nodemon
```

## Express server

```
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

## Using ejs with express

```
var ejs = require('ejs')
  , app = require('express').createServer();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index'); // Where index.ejs is your ejs template 
                       //views folder ke andar "index.ejs" banane ka
});

app.listen(3000);
```

## Include Bootstrap`s CSS and Js

```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  </head>
  <body>
    <h1>Hello, world!</h1>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
  </body>
</html>

```

## Button Component

Include this in body for Button component

```
<button type="button" class="btn btn-info">Info</button>
```

## Connect to mongo db 

```
//Write this in "main.js" file
const mongoose = require('mongoose');

await mongoose.connect('mongodb://127.0.0.1:27017/test');

const silence = new Kitten({ name: 'Silence' });
console.log(silence.name);

await silence.save();

//Make "models" folder.And that "models" folder make "employee.js" file

const kittySchema = new mongoose.Schema({
  name: String
});

const Kitten = mongoose.model('Kitten', kittySchema);

module.exports = Kitten
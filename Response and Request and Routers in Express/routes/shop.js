//Make routes folder
//In that routes folder we  made "shop.js" file
//For Routing express: go to express js wenbsite,then go to "guide", then go to "Routing",and then follow the instructions, copy it and paste it.

const express = require('express')
const router = express.Router()

// define the home page route
//yeh code chalega jab hum likhege "https:localhost:3000/blog/"
router.get('/', (req, res) => {
  res.send('Shop home page')
})

// define the about route
//yeh code chalega jab hum likhege "https:localhost:3000/blog/about"
router.get('/about', (req, res) => {
  res.send('About Shop')
})

module.exports = router
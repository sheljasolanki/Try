require('dotenv').config()
// to run file do= node deploy.js
// to start app do= npm run start
console.log("hellooo");
const express = require('express')
const app = express()
//const port = 4000 // the port where it will listen
// u shouldnt write these information here because theese info should not be available to everyone

const data={
  "name": "js-backend",
  "version": "1.0.0",
  "description": "a basic app to deploy",
  "main": "deploy.js",
  "scripts": {
    "start": "node deploy.js"
  },
  "keywords": [
    "node",
    "app"
  ],
  "author": "Shelja",
  "license": "ISC",
  "comments": {
    "key": "scripts",
    "comments": "this scripts when i do npm start it will actually run the command node deploy.js"
  },
  "dependencies": {
    "dotenv": "^16.4.7",
    "express": "^4.21.2"
  }
}
app.get('/', (req, res) => {
  res.send('Hello World!')
})  // '/' is page pr jb req aaye to ye hello world send krna hai

app.get('/twitter',(req,res)=>{
  res.send('sheelja09@gmail.com')
})

// u can pass HTML too
app.get('/login',(req,res)=>{
  res.send('<h1>pls login now</h1>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})

app.get('/json',(req,res)=>{
  res.json(data)
})

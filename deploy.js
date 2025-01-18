require('dotenv').config()
// to run file do= node deploy.js
// to start app do= npm run start
console.log("hellooo");
const express = require('express')
const app = express()
//const port = 4000 // the port where it will listen
// u shouldnt write these information here because theese info should not be available to everyone

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

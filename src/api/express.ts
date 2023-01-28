import express from 'express'
const app = express() // create an express application
const fs = require('fs') // import fs module to read files

// define an endpoint '/getWord' that listens for GET requests
app.get('/getWord', (req, res) => {
  // read the contents of 'word-bank.txt' file
  fs.readFile('./src/words-bank.txt', 'utf8', (err: any, data: string) => {
    if (err) {
      // if there is an error, send the error as response
      res.send(err)
    } else {
      // split the contents of the file into an array of words
      const words = data.split('\n')
      // select a random word from the array
      const randomWord = words[Math.floor(Math.random() * words.length)]
      // send the selected word as response
      res.send(randomWord)
      console.log(randomWord)
    }
  })
})

// start the server on port 3000
app.listen(3000, () => {
  console.log('Server started on port 3000')
})

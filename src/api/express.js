import express from 'express'
import {fs} from fs
import { json } from 'body-parser'
// const app = express()

// // Use body-parser to parse JSON request bodies
// app.use(json())

// // Set up a route for the /auth endpoint and listen for a POST request
// app.post('/auth', (req, res) => {
//   // Extract the user and password from the request body
//   const { user, password } = req.body
//   // Here you should check the user and password against the database or any other service
//   // if the user and password are valid
//   const accessToken = generateToken(user)
//   const roles = getRoles(user)
//   res.json({ accessToken, roles })
//   // if the user or password are invalid
//   res.status(401).json({ error: 'Unauthorized' })
// })

// app.listen(3004, () => {
//   console.log('Server is running on port 3004')
// })

// const express = require("express");
const app = express();
// const fs = require("fs");

app.get("/random-word", (req, res) => {
  fs.readFile('../words-bank.txt', "utf8", (err, data) => {
    if (err) throw err;
    const words = data.split("\n");
    const randomWord = words[Math.floor(Math.random() * words.length)];
    res.json({ word: randomWord });
  });
});

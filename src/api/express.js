import express from 'express'
import { json } from 'body-parser'
const app = express()

// Use body-parser to parse JSON request bodies
app.use(json())

// Set up a route for the /auth endpoint and listen for a POST request
app.post('/auth', (req, res) => {
  // Extract the user and password from the request body
  const { user, password } = req.body
  // Here you should check the user and password against the database or any other service
  // if the user and password are valid
  const accessToken = generateToken(user)
  const roles = getRoles(user)
  res.json({ accessToken, roles })
  // if the user or password are invalid
  res.status(401).json({ error: 'Unauthorized' })
})

app.listen(3004, () => {
  console.log('Server is running on port 3004')
})
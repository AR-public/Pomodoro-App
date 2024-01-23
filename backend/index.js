import express from "express"
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/contact', (req, res) => {
  res.send('phone number: xxx-xxxxx-xxxx')
})

app.get('/about', (req, res) => {
  res.send('My name is Ahmad')
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
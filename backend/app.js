const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
app.use(cors)

app.get('/', (req, res) => {
  res.json([{
    ProfileName: 'Coding',
    TimerLength: 25
  },
  {
    LightModeOn: "yes"
  }])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
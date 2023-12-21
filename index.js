// express is a Function
require('dotenv').config()
const express = require('express')
const PORT = process.env.PORT || 5000
const app = express()
require('./DataBase/dbConfig')
require('./DataBase/connection')
const rootRouter = require('./Routes/RootRoute')

// middleware

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1', rootRouter)

// Listen Server
app.listen(PORT, err => {
  if (err) throw err
  else console.log(`Server is listening on ${PORT}`)
})

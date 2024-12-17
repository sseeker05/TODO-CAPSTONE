const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
const Todo = require('./models/TodoModels')

const router  = require('./routes/router')


const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()
app.use (morgan ('dev'))



app.use(router)









app.post('/add', (req, res) => {  
  const task = req.body.task
  Todo.create({
    task: task
  }).then(result => res.json(result)) 
  .catch(err => res.json(err))
  
})
  

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('Connected to MongoDB')
}) 
  


app.listen(5001, () => {
  console.log('Server started on port 5001')
})
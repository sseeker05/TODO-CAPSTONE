const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Todo = require('./models/Todo')


const app = express()
app.use(cors())
app.use(express.json())


mongoose.connect('mongodb+srv://sseeker05:9LvvkRAvIscjA6yb@cluster0.82bfk.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0&serverSelectionTimeoutMS=5000')


app.get ('/get', (req, res) => {
  TodoModel.find().then(result => res.json(result))
  .catch(err => res.json(err))
})




app.post('/add', (req, res) => {  
  const task = req.body.task
  Todo.create({
    task: task
  }).then(result => res.json(result)) 
  .catch(err => res.json(err))
  
})
  



app.listen(5001, () => {
  console.log('Server started on port 5001')
})
const TodoModel = require('../models/TodoModels') // add todoModels


module.exports = async(req, res) => {
  const todos = await TodoModel.find()
  res.json(todos)
}
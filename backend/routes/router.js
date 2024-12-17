const express = require('express')

const isLoggedIn = require('../middleware/isLoggedIn')


const router = express.Router()




router.post('/login', require('./loginRoute'))
router.post('/todos', isLoggedIn, require('./createTodoRoute'))
router.get('/todos', isLoggedIn, require('./readTodosRoute'))
router.put('/todos/:id', isLoggedIn, require('./updateTodoRoute'))
router.delete('/todos/:id', isLoggedIn, require('./deleteTodoRoute'))




module.exports = router
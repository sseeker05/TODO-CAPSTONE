const TodoModel = require('../models/TodoModels');

module.exports = async (req, res) => {
  const { id } = req.params;

  
  const todo = await TodoModel.findByIdAndDelete(id);

  if (!todo) {
    
    return res.status(404).json({ message: 'Todo not found' });
  }

  res.status(204).json({ message: 'Todo deleted successfully' });
};

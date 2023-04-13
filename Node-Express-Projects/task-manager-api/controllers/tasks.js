const getAllTasks = (req, res) => {
  res.json("All Items"); // can send json data due to express.json().
};

const createTask = (req, res) => {
  res.json("Create Items");
};

const getTask = (req, res) => {
  res.json({ id: req.params.id });
};

const updateTask = (req, res) => {
  res.json("Update Task");
};

const deleteTask = (req, res) => {
  res.json("Delete Task");
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};

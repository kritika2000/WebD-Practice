const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");

/** REST determines how an API would look like.
 * It is a pattern. https://blog.hubspot.com/website/what-is-rest-api
 */
// https://rapidapi.com/blog/put-vs-patch/

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;

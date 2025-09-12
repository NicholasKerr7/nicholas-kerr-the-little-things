const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todo-controller");

router.route("/");

router
  .route("/:user_id")
  .get(todoController.getAllTodos)
  .post(todoController.add)
  
  router
  .route("/:todo_id")
  .delete(todoController.remove)
  .put(todoController.update);

  router
  .route("/:user_id/due_at")
  .get(todoController.getDueDate);

  router
  .route("/:user_id/complete")
  .get(todoController.getCompleteTasks);

  

module.exports = router;

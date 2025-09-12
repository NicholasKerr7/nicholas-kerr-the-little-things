// Todo controller — CRUD, due-date and completion filters.
// Uses Knex with MySQL. Dates are stored as timestamps; 'complete' is boolean.
const knex = require("knex")(require("../knexfile"));

// const getSingleTodo = (req, res) => {
//   knex("todo")
//     .where({ user_id: req.params.user_id, id: req.params.id })
//     .then((result) => {
//       if (result.length === 0 || !Number(req.params.id)) {
//         res.status(404).send(`No user with ID ${req.params.id}.`);
//       } else {
//         res.status(200).json(result[0]);
//       }
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).send(`Error retrieving user: ${err}`);
//     });
// };

const getAllTodos = (req, res) => {
  knex("todo")
    .where({ user_id: req.params.user_id })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(`Error retrieving user todos: ${err}`);
    });
};

const getCompleteTasks = (req, res) => {
  knex("todo")
    .where({ user_id: req.params.complete })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(`Error retrieving user todos: ${err}`);
    });
};

const getDueDate = (req, res) => {
  knex("todo")
    .where({ user_id: req.params.due_at })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(`Error retrieving user todos: ${err}`);
    });
};

const add = (req, res) => {
  if (
    !req.params.user_id ||
    !req.body.task ||
    !req.body.category ||
    !req.body.due_at
  ) {
    return res
      .status(400)
      .send("Please provide required information in the request");
  }
  knex("todo")
    .insert({ ...req.body, user_id: Number(req.params.user_id) })
    .then((result) => {
      console.log(result);
      res
        .status(201)
        .json({ ...req.body, user_id: Number(req.params.user_id) });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: `Unable to create new todo ${error}` });
    });
};

const update = async (req, res) => {
  if (
    !req.body.user_id ||
    !req.body.task ||
    !req.body.category ||
    !req.body.due_at
  ) {
    return res
      .status(400)
      .send("Please provide required information in the request");
  }
  
  await knex("todo")
    .where({ id: req.params.todo_id })
    .update(req.body)
    .then(()=>{
      knex("todo")
          .where({ id: req.params.todo_id })
          .then((result) => {
            return res.json(result);
          })
          .catch((err) => {
            return res.status(500).json({
              message: `Unable to update todo with ID: ${req.params.todo_id}`,
            });
          });
    })
    .catch((err) => {
      return res.status(500).json({
        message: `Unable to update todo with ID: ${req.params.todo_id}`, error: err
      });
    });

    
};

const remove = (req, res) => {
  knex("todo")
    .where({ id: req.params.todo_id })
    .del()
    .then((result) => {
      if (result === 0) {
        return res.status(400).json({
          message: `todo with Id: ${req.params.todo_id} to be deleted not found`,
        });
      }
      res.status(204).send();
    })
    .catch((error) => {
      res.status(500).json({ message: `Unable to delete your todo ${error}` });
    });
};

module.exports = {
  getAllTodos,
  getCompleteTasks,
  getDueDate,
  // getSingleTodo,
  add,
  update,
  remove,
};

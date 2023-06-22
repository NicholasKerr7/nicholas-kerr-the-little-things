import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NewTasksPage.scss";

export default function NewTasksPage({ getAllTasks }) {
  const [handlePost, setHandlePost] = useState({});
  // const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {
    setHandlePost({ ...handlePost, [event.target.name]: event.target.value });
    console.log(handlePost);
  };

  const handleAdd = (event) => {
    event.preventDefault();

    // setFormErrors({});

    // let formIsValid = true;

    // const errors = {};

    // if (!handlePost.task) {
    //   formIsValid = false;
    //   errors["error_task"] = true;
    // }

    // if (!handlePost.category) {
    //   formIsValid = false;
    //   errors["error_task"] = true;
    // }

    // if (!formIsValid) {
    //   return setFormErrors(errors);
    // }

    setTimeout(() => {
      navigate("/todos/1/tasks");
    }, 1000);

    const postNewTask = {
      task: handlePost.task,
      category: handlePost.category,
      created_at: handlePost.created_at,
      due_at: handlePost.due_at,
    };

    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/todos/1`, postNewTask)
      .then((response) => {
        getAllTasks();
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <section className="new-task">
      <div className="new-task__header-container">
        <h1 className="new-task__header-title">Create New Task</h1>
      </div>
      <form className="new-task__form" onSubmit={handleAdd}>
        <div className="new-task__title-container">
          <label className="new-task__title" htmlFor="newTask">
            Task
          </label>
          <input
          className="new-task__title-input"
            name="task"
            type="text"
            placeholder="Going shopping..."
            onChange={(event) => handleChange(event)}
            // className={`new-task__title-input ${formErrors.error_task ? "new-task__title-input--error" : ""}`}
          />
          {/* {formErrors.error_task && (
            <p className="new-task__error">This field is required</p>
          )} */}
        </div>
        <div className="new-task__datetime-container">
          <div className="new-task__start-date-container">
            <label className="new-task__start-date-title" htmlFor="start">
              Start date:
            </label>
            <input
              className="new-task__start-date"
              type="date"
              id="start"
              name="created_at"
              defaultValue="2023-06-28"
              min="2023-01-01"
              max="2090-12-31"
            onChange={(event) => handleChange(event)}
              required
            />
          </div>
          {/* <div className="new-task__time-container">
            <label className="new-task__time-title" htmlFor="appt">
              Time:
            </label>
            <input
              className="new-task__timestamp"
              type="time"
              id="appt"
              name="created_at"
              min="00:00"
              max="24:00"
            onChange={(event) => handleChange(event)}
              required
            />
          </div> */}
        </div>
        <div className="new-task__date-container">
          <label className="new-task__date-title" htmlFor="end">
            End date:
          </label>
          <input
            className="new-task__due-date"
            type="date"
            id="end"
            name="due_at"
            defaultValue="2023-06-28"
            min="2023-01-01"
            max="2090-12-31"
            onChange={(event) => handleChange(event)}
            required
          />
        </div>
        <div className="new-task__category-container">
          <label className="new-task__category-title" htmlFor="category">
            Category
          </label>
          <input
            className="new-task__category-input"
            name="category"
            type="text"
            placeholder="Create a Category"
            onChange={(event) => handleChange(event)}
            required
          />
        </div>
        <button className="new-task__create-btn">Create Task</button>
      </form>
    </section>
  );
}

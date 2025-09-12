import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Todo.scss";
import crossIconSource from "../../assets/capstone-icons/close-24px.svg";

export default function Todo({
  tasks,
  // getAllTasks,
  // isComplete,
  getIsComplete,
  modalState,
  // setModalState,
  chosenTask,
  // setChosenTask,
  handleModal,
  handleCancel,
  handleItemDelete,
  handleComplete,
}) {

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate =
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    return formattedDate;
  };
  

  useEffect(() => { getIsComplete(); }, []); // eslint-disable-next-line react-hooks/exhaustive-deps

  const calculateRemainingTime = (dateString) => {
    const now = new Date();
    const dueDate = new Date(dateString);
    const diffInMilliseconds = dueDate - now;

    if (diffInMilliseconds <= 0) {
      return "Expired";
    }

    const days = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (diffInMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (diffInMilliseconds % (1000 * 60 * 60)) / (1000 * 60)
    );

    return `${days} days ${hours} hrs ${minutes} min left`;
  };

  // Update remaining time every second
  useEffect(() => {
    const interval = setInterval(() => {
      const updatedRemainingTime = {};

      tasks.forEach((task) => {
        const { due_at } = task;
        updatedRemainingTime[task.id] = calculateRemainingTime(due_at);
      });

      setRemainingTime(updatedRemainingTime);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [tasks]);

  const sortedDate = (dateString) => {
    const date = new Date(dateString).getTime();
    return date;
  };

  return (
    <section className="todo">
      <div className="todo__title-container">
        <h1 className="todo__title">On Going Tasks</h1>
      </div>
      {tasks.filter((task) => task.complete === "0").length === 0 ? (
        <p className="todo__notification-text">No ongoing tasks!</p>
      ) : (
        tasks
          .filter((task) => task.complete === "0")
          .sort((a, b) => sortedDate(b.created_at) - sortedDate(a.created_at))
          .slice(0, 2)
          .map((task) => (
            <div
              key={task.id}
              className="todo__container"
              onClick={() => {
                handleModal(task);
              }}
            >
              <div className="todo__text-container">
                <p className="todo__task-title">{task.task}</p>
                <p className="todo__task-date">
                  Due Date: {formatDate(task.due_at)}
                </p>
                <p className="todo__remaining-time">
                  {calculateRemainingTime(task.due_at)}
                </p>
              </div>
            </div>
          ))
      )}
      <div className={`overlay ${modalState ? "" : "hidden"}`}></div>
      {modalState && (
        <div className="modal">
          <img
            className="modal__cross"
            src={crossIconSource}
            alt="cancel"
            onClick={handleCancel}
            style={{ cursor: "pointer" }}
          />
          <h1 className="modal__title">
            Please select {chosenTask.category} task option:
          </h1>
          <p className="modal__message">
            Please confirm that you'd like to complete/delete {chosenTask.task}{" "}
            from the list of tasks. You won't be able to undo this action.
          </p>
          <button className="modal__comp-btn" onClick={handleComplete}>
            Complete
          </button>
          <button className="modal__del-btn" onClick={handleItemDelete}>
            Remove
          </button>
        </div>
      )}
    </section>
  );
}

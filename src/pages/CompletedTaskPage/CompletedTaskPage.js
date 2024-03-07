import React from "react";
import "./CompletedTaskPage.scss";
import crossIconSource from "../../assets/capstone-icons/close-24px.svg";
import checkBox from "../../assets/capstone-icons/check-box.svg";

export default function CompletedTaskPage({
  completedTasks,
  DeletedTask,
  modalState,
  chosenTask,
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
  return (
    <div className="completed-task">
      <h2 className="completed-task__header">Completed Tasks</h2>
      {completedTasks.map((task, index) => (
        <div key={index} className="completed-task__container">
          <p className="completed-task__title">{task.task}</p>
          <p className="completed-task__category">Category: {task.category}</p>
          <p className="completed-task__create-at">
            Created At: {formatDate(task.created_at)}
          </p>
          <p className="completed-task__due-at">
            Due Date: {formatDate(task.due_at)}
          </p>
          {/* <button onClick={() => DeletedTask(index)}>Delete</button> */}
        </div>
      ))}
      <div className={`overlay ${modalState ? "" : "hidden"}`} />
      {modalState && chosenTask && (
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
          <button className="modal__del-btn" onClick={handleItemDelete}>
            Remove
          </button>
          <button className="modal__comp-btn" onClick={handleComplete}>
            Complete
          </button>
        </div>
      )}
    </div>
  );
}

import { useEffect } from "react";
import "./Tasks.scss";
import crossIconSource from "../../assets/capstone-icons/close-24px.svg";
export default function Tasks({
  tasks,
  handleTaskFilter,
  getIsComplete,
  modalState,
  setModalState,
  chosenTask,
  setChosenTask,
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

  const sortedDate = (dateString) => {
    const date = new Date(dateString).getTime();
    return date;
  };

  useEffect(() => {
    getIsComplete().catch((err) => {
      console.error("Error in getIsComplete:", err);
    });
  }, []);

  return (
    <section className="tasks">
      <div className="tasks__container">
        {handleTaskFilter(tasks)
          .sort((a, b) => sortedDate(b.created_at) - sortedDate(a.created_at))
          .map((task) => (
            <div
              key={task.id}
              className="tasks__event-container"
              onClick={() => {
                handleModal(task);
              }}
            >
              <div className="tasks__iscomplete">
                {/* Display "Complete" or "Incomplete" */}
                <p className="tasks__complete">
                  {task.complete ? "" : ""}
                </p>
              </div>
              <p className="tasks__label">{task.task}</p>
              <p className="tasks__category">Category: {task.category}</p>
              <p className="tasks__create-at">
                Created At: {formatDate(task.created_at)}
              </p>
              <p className="tasks__due-at">
                Due Date: {formatDate(task.due_at)}
              </p>
            </div>
          ))}
      </div>
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

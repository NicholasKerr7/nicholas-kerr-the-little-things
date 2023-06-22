import "./DashBoard.scss";
import textBullet from "../../assets/capstone-icons/text-bullet.svg";
import checklistIcon from "../../assets/capstone-icons/checklist.svg";
import checklistIcon2 from "../../assets/capstone-icons/checklist-gold.svg";
import crossIconSource from "../../assets/capstone-icons/close-24px.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";


export default function DashBoard({ tasks, taskCount, isComplete, getAllTasks }) {
  const [modalState, setModalState] = useState(false);

  const handleModal = async (event) => {
    await setModalState(true);
    getAllTasks();
    isComplete();
}

const handleCancel = async (event) => {
    await setModalState(false);
    getAllTasks();
    isComplete();
}

const handleItemDelete = async (event) => {
    event.preventDefault();
    try {
        const response = await axios
            .delete(`${process.env.REACT_APP_API_BASE_URL}/todos/${tasks.id}/delete`)
            .then(response => {
                getAllTasks();
            });
    } catch (error) {
        console.log(error);
    }
}
  return (
    <section className="dashboard">
      <div className="dashboard__title-container">
        <h1 className="dashboard__title">Hey Nick!</h1>
      </div>
      <div className="dashboard__cards">
        <div className="dashboard__left-card">
          <img
            className="dashboard__wishlist-icon"
            src={textBullet}
            alt="bulletin-icon"
          />
          <p className="dashboard__left-category">WISHLIST</p>
          {tasks.slice(0, 4).map((task) => {
            return (
              <p key={task.id} className="dashboard__left-text">
                {task.task}
              </p>
            );
          })}
        </div>
        <div className="dashboard__right-cards">
          <Link className="dashboard__tasks-wrapper" to="/todos/1/tasks">
            <img
              className="dashboard__check-icon"
              src={checklistIcon}
              alt="check-icon"
            />
            <p className="dashboard__right-category">{taskCount}</p>
            <p className="dashboard__item-counter">TASKS</p>
          </Link>
          <div className="dashboard__complete-wrapper">
            <img
              className="dashboard__check-icon"
              src={checklistIcon2}
              alt="check icon"
              onClick={handleModal}
            />
            <p className="dashboard__right-category--complete">{isComplete}</p>
            <p className="dashboard__item-counter">COMPLETE</p>
          </div>
        </div>
      </div>
     
      <div className={`overlay ${modalState === true ? "" : "hidden"}`}></div>
            <div className={`modal ${modalState === true ? "" : "hidden"}`}>
                <img className="modal__cross" src={crossIconSource} alt="cancel" onClick={handleCancel} />
                <h1 className="modal__title">Delete {tasks.task_id} task?</h1>
                <p className="modal__message">Please confirm that you'd like to delete {tasks.category_id} from the list of task. You won't be able to undo this action.</p>
                <button className="modal__cancel-btn" onClick={handleCancel}>Complete</button>
                <button className="modal__delete-btn"  onClick={handleItemDelete}>Remove</button>
            </div>
    </section>
  );
}

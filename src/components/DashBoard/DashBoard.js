import "./DashBoard.scss";
import textBullet from "../../assets/capstone-icons/Vector-green.svg";
import checklistIcon from "../../assets/capstone-icons/checklist.svg";
import checklistIcon2 from "../../assets/capstone-icons/checklist-gold.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function DashBoard({ tasks, taskCount, isComplete }) {
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    setIsPressed(true);
    setTimeout(() => {
      setIsPressed(false);
    }, 300);
  };
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
          <Link
            className={`dashboard__tasks-wrapper ${isPressed ? "pressed" : ""}`}
            to="/todos/1/tasks"
            onClick={handleClick}
          >
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
            />
            <p className="dashboard__right-category--complete">{isComplete}</p>
            <p className="dashboard__item-counter">COMPLETE</p>
          </div>
        </div>
      </div>
    </section>
  );
}

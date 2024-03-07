import "./DashBoard.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

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
          <p className="dashboard__left-category">SHARED LIST</p>
          {tasks.slice(0, 3).map((task) => {
            return (
              <p key={task.id} className="dashboard__left-text">
                {task.task}
              </p>
            );
          })}
          <p className="dashboard__left-view-more">view more....</p>
        </div>
        <div className="dashboard__right-cards">
          <Link
            className={`dashboard__tasks-wrapper ${isPressed ? "pressed" : ""}`}
            to="/todos/1/tasks"
            onClick={handleClick}
          >
            <p className="dashboard__item-counter">{taskCount}</p>
            <p className="dashboard__right-category">TASKS</p>
          </Link>
          <div className="dashboard__complete-wrapper">
            <Link className="dashboard__complete-wrappr" to="/todos/1/completedtasks">
            <p className="dashboard__item-counter--complete">{isComplete}</p>
            <p className="dashboard__right-category">COMPLETE</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

import "./DashBoard.scss";
import textBullet from "../../assets/capstone-icons/text-bullet.svg";
import checklistIcon from "../../assets/capstone-icons/checklist.svg";
import checklistIcon2 from "../../assets/capstone-icons/checklist-gold.svg";
import { Link } from "react-router-dom";

export default function DashBoard({ tasks, taskCount, isComplete }) {
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
              <>
                <p className="dashboard__left-text">{task.task}</p>
              </>
            );
          })}
        </div>
        <div className="dashboard__right-cards">
          <Link className="dashboard__tasks-wrapper" to="todos/:user_id/tasks">
            <img className="dashboard__check-icon" src={checklistIcon} alt="check-icon" />
            <p className="dashboard__right-category">{taskCount}</p>
            <p className="dashboard__item-counter">TASKS</p>
          </Link>
          <div className="dashboard__complete-wrapper">
            <img
              className="dashboard__check-icon"
              src={checklistIcon2}
              alt=""
            />
            <p className="dashboard__right-category">{isComplete}</p>
            <p className="dashboard__item-counter">COMPLETE</p>
          </div>
        </div>
      </div>
    </section>
  );
}

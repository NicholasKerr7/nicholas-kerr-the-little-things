import "./Todo.scss";
import checklistIcon from "../../assets/capstone-icons/text-bullet.svg";
import dotsIcon from "../../assets/capstone-icons/dots-icon.svg";
import { Link } from "react-router-dom";

export default function Todo(tasks) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate =
      date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
    return formattedDate;
  };

  return (
    <section className="todo">
      <div className="todo__title-container">
        <h1 className="todo__title">On Going Tasks</h1>
      </div>
      {tasks.tasks.slice(0, 2).map((task) => {
        return (
          <div key={task.id} className="todo__container">
            <div className="todo__checklist-icon">
              <img src={checklistIcon} alt="" />
            </div>
            <div className="todo__text-container">
              <p className="todo__task-title">{task.task}</p>
              <p className="todo__task-date">{formatDate(task.due_at)}</p>
            </div>
            <Link className="todo__dots-icon">
              <img src={dotsIcon} alt="" />
            </Link>
          </div>
        );
      })}
    </section>
  );
}

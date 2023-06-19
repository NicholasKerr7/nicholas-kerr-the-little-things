import "./Todo.scss";

export default function Todo() {
  return (
    <section className="todo">
      <div className="todo__title_container">
        <h1 className="todo__title">On Going Tasks</h1>
      </div>
      <div className="todo-container">
        <div className="todo__checklist-icon"></div>
        <div>
          <p className="todo__task-folder"></p>
          <p className="todo__task-folder"></p>
        </div>
        <div className="todo__dots-icon"></div>
      </div>
    </section>
  );
}

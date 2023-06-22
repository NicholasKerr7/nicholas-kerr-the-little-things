import "./Tasks.scss";

export default function Tasks({tasks}) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate =
      date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
    return formattedDate;
  };

  return (
    <section className="tasks">
      <div className="tasks__timestamp"></div>
      {tasks.tasks.map((task) => {
        return (
          <div key={task.id} className="tasks__event-container">
            <p>{task.task}</p>
            <p>Category:{task.category}</p>
            <p>Complete:{task.complete}</p>
            <p>Created At:{formatDate(task.created_at)}</p>
            <p>Due Date:{formatDate(task.due_at)}</p>
          </div>
        );
      })}
    </section>
  );
}

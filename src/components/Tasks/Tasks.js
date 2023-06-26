import "./Tasks.scss";

export default function Tasks({ tasks, handleTaskFilter, isComplete, getIsComplete }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate =
      date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
    return formattedDate;
  };

  // const getCompleteStyle = (isComplete) => {
  //   return {
  //     color: isComplete ? "green" : "red",
  //   };
  // };

  return (
    <section className="tasks">
      <div className="tasks__container">
        {handleTaskFilter(tasks)
          .sort((a, b) => b.created_at - a.created_at)
          .map((task) => (
            <div key={task.id} className="tasks__event-container">
              <div className="tasks__iscomplete">
                {task.complete ? (
                  <p className="tasks__complete">Complete</p>
                ) : (
                  <p className="tasks__complete">Incomplete</p>
                )}

                {/* <p className="tasks__complete" style={getCompleteStyle(task.complete)}>Complete: {task.complete}</p> */}
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
    </section>
  );
}

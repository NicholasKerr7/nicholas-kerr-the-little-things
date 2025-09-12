import React from "react";

export default function CompletedTasks({ completedTasks, onDeleteTask }) {
  return (
    <div className="completed-tasks">
      <h2>Completed Tasks</h2>
      <ul>
        {completedTasks.map((task, index) => (
          <li key={index}>
            {task.description}
            <button onClick={() => onDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

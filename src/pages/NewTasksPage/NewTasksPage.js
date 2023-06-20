import "./NewTasksPage.scss";

export default function NewTasksPage() {
  return (
    <section classname="new-task">
      <div classname="new-task__">
        <h1 classname="new-task__">Create New Task</h1>
      </div>
      <form classname="new-task__">
        <div classname="new-task__">
          <label classname="new-task__" htmlFor="">Title</label>
          <input classname="new-task__" type="text" placeholder="Going shopping..." />
        </div>
        <div classname="new-task__">
          <label classname="new-task__" for="start">Start date:</label>
          <input classname="new-task__"
            type="date"
            id="start"
            name="trip-start"
            value="2023-06-28"
            min="2023-01-01"
            max="2090-12-31"
            required
          />
        </div>
        <div classname="new-task__">
          <label classname="new-task__" for="appt">Time:</label>
          <input classname="new-task__"
            type="time"
            id="appt"
            name="appt"
            min="00:00"
            max="24:00"
            required
          />
        </div>
        <div classname="new-task__">
          <label classname="new-task__" for="end">End date:</label>
          <input classname="new-task__"
            type="date"
            id="end"
            name="trip-end"
            value="2023-06-28"
            min="2023-01-01"
            max="2090-12-31"
            required
          />
        </div>
        <div classname="new-task__">
            <p classname="new-task__">Category</p>
            <div classname="new-task__">Create Category</div>
        </div>
      <button classname="new-task__">Create Task</button>
      </form>
    </section>
  );
}

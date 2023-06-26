import "./MyTaskPage.scss";
import Calender from "../../components/Calender/Calender.js";
import React, { useState } from "react";
import Tasks from "../../components/Tasks/Tasks";

export default function MyTaskPage({ tasks }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const handleTaskFilter = () => {
    if (!selectedDate || !currentMonth) {
      return tasks;
    }

    // Filter tasks by selected date and current month
    const filteredDateSelect = tasks.filter((task) => {

      console.log(selectedDate > formatDate(task.created_at) && selectedDate < formatDate(task.due_at));

console.log(formatDate(task.created_at));
      return selectedDate > formatDate(task.created_at) && selectedDate < formatDate(task.due_at)})
      console.log(filteredDateSelect);
 
    return filteredDateSelect;
  }

  const handleDateSelect = (selectedDate) => {
    // Filter tasks based on the selected date
    const filteredTasks = tasks.filter((task) => {
      const taskDate = new Date(task.due_at).toLocaleDateString();
      return taskDate === selectedDate;
    });
  };
  return (
    <div className="task-page">
      <Calender tasks={tasks} onDateSelect={handleDateSelect} setSelectedDate={setSelectedDate}/>
      <Tasks tasks={tasks} />
    </div>
  );
}

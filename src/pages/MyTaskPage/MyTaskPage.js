import "./MyTaskPage.scss";
import Calender from "../../components/Calender/Calender.js";
import React, { useState } from "react";
import Tasks from "../../components/Tasks/Tasks";

export default function MyTaskPage({ tasks, isComplete, getIsComplete }) {
  const [currentMonth, setCurrentMonth] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const handleTaskFilter = () => {
    if (!selectedDate || !currentMonth) {
      return tasks;
    }

    // Filter tasks by selected date and current month
    const filteredDateSelect = tasks.filter((task) => {
      return (
        selectedDate > formatDate(task.created_at) &&
        selectedDate < formatDate(task.due_at)
      );
    });

    return filteredDateSelect;
  };

  const handleDateSelect = (selectedDate) => {
    // Filter tasks based on the selected date
    const filteredTasks = tasks.filter((task) => {
      const taskDate = new Date(task.due_at).toLocaleDateString();
      return taskDate === selectedDate;
    });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate =
      date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
    return formattedDate;
  };
  return (
    <div className="task-page">
      <Calender
        onDateSelect={handleDateSelect}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        currentMonth={currentMonth}
        setCurrentMonth={setCurrentMonth}
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
        handleTaskFilter={handleTaskFilter}
        formatDate={formatDate}
      />
      <Tasks
        tasks={tasks}
        handleTaskFilter={handleTaskFilter}
        isComplete={isComplete}
        getIsComplete={getIsComplete}
      />
    </div>
  );
}

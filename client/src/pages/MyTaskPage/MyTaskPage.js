import "./MyTaskPage.scss";
import Calender from "../../components/Calender/Calender";
import React, { useState } from "react";
import Tasks from "../../components/Tasks/Tasks";

// Normalize any Date-like value to midnight for safe comparisons
const normalizeDate = (d) => {
  const dt = new Date(d);
  dt.setHours(0, 0, 0, 0);
  return dt;
};

// Parse selected dates coming from the calendar (supports "DD/MM/YYYY", ISO, or Date)
const parseSelectedDate = (sd) => {
  if (!sd) return null;
  if (sd instanceof Date) return normalizeDate(sd);
  if (typeof sd === "string") {
    const parts = sd.split(/[\/-]/).map(Number);
    if (parts.length === 3) {
      // assume DD/MM/YYYY
      const [day, month, year] = parts;
      if (!Number.isNaN(day) && !Number.isNaN(month) && !Number.isNaN(year)) {
        return normalizeDate(new Date(year, month - 1, day));
      }
    }
    const t = new Date(sd);
    if (!Number.isNaN(t)) return normalizeDate(t);
  }
  try {
    return normalizeDate(sd);
  } catch {
    return null;
  }
};

export default function MyTaskPage({
  tasks,
  isComplete,
  getIsComplete,
  modalState,
  setModalState,
  chosenTask,
  setChosenTask,
  handleModal,
  handleCancel,
  handleItemDelete,
  handleComplete,
}) {
  const [currentMonth, setCurrentMonth] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  const handleTaskFilter = () => {
    // If nothing is selected, return all tasks
    const sel = parseSelectedDate(selectedDate);
    if (!sel) return tasks;

    // Keep tasks whose selected date is between created_at and due_at (inclusive)
    return tasks.filter((task) => {
      const created = normalizeDate(task.created_at);
      const due = normalizeDate(task.due_at);
      return sel >= created && sel <= due;
    });
  };

  const handleDateSelect = (date) => {
    // Just store the user’s selection; filtering happens in handleTaskFilter
    setSelectedDate(date);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
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
        modalState={modalState}
        setModalState={setModalState}
        chosenTask={chosenTask}
        setChosenTask={setChosenTask}
        handleModal={handleModal}
        handleCancel={handleCancel}
        handleItemDelete={handleItemDelete}
        handleComplete={handleComplete}
      />
    </div>
  );
}

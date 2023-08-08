import { Link } from "react-router-dom";
import "./Calender.scss";
import backIcon from "../../assets/capstone-icons/arrow-back-circle.svg";
import React, { useEffect, useState, useRef } from "react";

export default function Calendar({
  onDateSelect,
  selectedDate,
  setSelectedDate,
  setCurrentDate,
  currentDate,
  currentMonth,
  setCurrentMonth,
  handleTaskFilter,
  formatDate,
}) {
  const [currentDay, setCurrentDay] = useState("");
  const dateScrollRef = useRef(null);

  useEffect(() => {
    const today = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    setCurrentDate(today.toLocaleDateString(undefined, options));
    setCurrentDay(today.toLocaleDateString(undefined, { weekday: "long" }));
    setCurrentMonth(today.toLocaleDateString(undefined, { month: "long" }));
  }, []);

  useEffect(() => {
    // Automatically scroll to the selected date
    if (dateScrollRef.current && selectedDate) {
      const selectedElement =
        dateScrollRef.current.querySelector(".date-item.active");
      if (selectedElement) {
        selectedElement.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }
    }
  }, [selectedDate]);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    onDateSelect(date);
  };

  const generateDates = () => {
    const dates = [];
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();

    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    for (let i = 0; i < daysInMonth; i++) {
      const date = new Date(currentYear, currentMonth, i + 1);

      const dayOfWeek = date.toLocaleDateString(undefined, {
        weekday: "short",
      });
      const dayOfMonth = date.toLocaleDateString(undefined, { day: "numeric" });

      dates.push({ date, dayOfWeek, dayOfMonth });
    }

    return dates;
  };

  const dates = generateDates();
  const filteredTasks = handleTaskFilter();

  const monthOptions = Array.from({ length: 12 }, (_, i) => {
    const month = new Date();
    month.setMonth(i);
    return {
      value: month.toLocaleDateString(undefined, { month: "long" }),
      label: month.toLocaleDateString(undefined, { month: "long" }),
    };
  });

  return (
    <div className="calender-manager">
      <div className="calender-manager__title-container">
        <Link to="/todos">
          <img
            className="calender-manager__back-icon"
            src={backIcon}
            alt="back icon"
          />
        </Link>
        <h2 className="calender-manager__title">MY TASKS</h2>
      </div>
      
      <div className="month-dropdown">
        <select
          className="month__wrapper"
          value={currentMonth}
          onChange={(e) => setCurrentMonth(e.target.value)}
        >
          {monthOptions.map(({ value, label }) => (
            <option className="month__title-option" key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
      <div className="current-date">{currentDate}</div>
      <div className="date-scroll-container">
        <div className="scroll-buttons">
          <button
            className="scroll-button scroll-button-left"
            onClick={() =>
              dateScrollRef.current.scrollBy({ left: -200, behavior: "smooth" })
            }
          >
            &lt;
          </button>
        </div>
        <div className="date-scroll" ref={dateScrollRef}>
          {dates.map(({ date, dayOfWeek, dayOfMonth }) => (
            <div
              key={date}
              className={`date-item ${
                selectedDate === date.toLocaleDateString() ? "active" : ""
              }`}
              onClick={() => handleDateSelect(date.toLocaleDateString())}
            >
              <div className="day-of-week">{dayOfWeek}</div>
              <div className="day-of-month">{dayOfMonth}</div>
            </div>
          ))}
        </div>
        <div className="scroll-buttons">
          <button
            className="scroll-button scroll-button-right"
            onClick={() =>
              dateScrollRef.current.scrollBy({ left: 200, behavior: "smooth" })
            }
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

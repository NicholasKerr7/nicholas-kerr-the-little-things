// const SharedListPage = () => {
//   return 
// };

// export default SharedListPage;


// import { Link } from "react-router-dom";
// // import "./Calender.scss";
// import backIcon from "../../assets/capstone-icons/arrow-back-circle.svg";
// import React, { useEffect, useState, useRef } from "react";

// export default function Calendar({
//   onDateSelect,
//   selectedDate,
//   setSelectedDate,
//   setCurrentDate,
//   currentDate,
//   currentMonth,
//   setCurrentMonth,
//   handleTaskFilter,
//   formatDate,
// }) {
//   const [currentDay, setCurrentDay] = useState("");
//   const dateScrollRef = useRef(null);

//   useEffect(() => {
//     const today = new Date();
//     const options = {
//       weekday: "long",
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//     };
//     setCurrentDate(today.toLocaleDateString(undefined, options));
//     setCurrentDay(today.toLocaleDateString(undefined, { weekday: "long" }));
//     setCurrentMonth(today.toLocaleDateString(undefined, { month: "long" }));
//   }, []);

//   useEffect(() => {
//     // Automatically scroll to the selected date
//     if (dateScrollRef.current && selectedDate) {
//       const selectedElement =
//         dateScrollRef.current.querySelector(".date-item.active");
//       if (selectedElement) {
//         selectedElement.scrollIntoView({
//           behavior: "smooth",
//           inline: "center",
//           block: "nearest",
//         });
//       }
//     }
//   }, [selectedDate]);

//   const handleDateSelect = (date) => {
//     setSelectedDate(date);
//     onDateSelect(date);
//   };

//   const generateDates = () => {
//     const dates = [];
//     const today = new Date();
//     const currentMonth = today.getMonth();
//     const currentYear = today.getFullYear();

//     const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

//     for (let i = 0; i < daysInMonth; i++) {
//       const date = new Date(currentYear, currentMonth, i + 1);

//       // for (let i = 0; i < 14; i++) {
//       //   const date = new Date(today);
//       //   date.setDate(today.getDate() + i);
//       const dayOfWeek = date.toLocaleDateString(undefined, {
//         weekday: "short",
//       });
//       const dayOfMonth = date.toLocaleDateString(undefined, { day: "numeric" });

//       dates.push({ date, dayOfWeek, dayOfMonth });
//     }

//     return dates;
//   };

//   const dates = generateDates();
//   const filteredTasks = handleTaskFilter();

//   const monthOptions = Array.from({ length: 12 }, (_, i) => {
//     const month = new Date();
//     month.setMonth(i);
//     return {
//       value: month.toLocaleDateString(undefined, { month: "long" }),
//       label: month.toLocaleDateString(undefined, { month: "long" }),
//     };
//   });

//   return (
//     <div className="calender-manager">
//       <div className="calender-manager__title-container">
//         <Link to="/todos">
//           <img
//             className="calender-manager__back-icon"
//             src={backIcon}
//             alt="back icon"
//           />
//         </Link>
//         <h2 className="calender-manager__title">MY TASKS</h2>
//       </div>
//       {/* <h2 className="selected-date">
//         {selectedDate ? `Selected Date: ${selectedDate}` : "No date selected"}
//       </h2> */}
//       <div className="month-dropdown">
//         <select
//           className="month__wrapper"
//           value={currentMonth}
//           onChange={(e) => setCurrentMonth(e.target.value)}
//         >
//           {monthOptions.map(({ value, label }) => (
//             <option className="month__title-option" key={value} value={value}>
//               {label}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="current-date">{currentDate}</div>
//       {/* <div className="current-day">{currentDay}</div> */}
//       <div className="date-scroll-container">
//         <div className="scroll-buttons">
//           <button
//             className="scroll-button scroll-button-left"
//             onClick={() =>
//               dateScrollRef.current.scrollBy({ left: -200, behavior: "smooth" })
//             }
//           >
//             &lt;
//           </button>
//         </div>
//         <div className="date-scroll" ref={dateScrollRef}>
//           {dates.map(({ date, dayOfWeek, dayOfMonth }) => (
//             <div
//               key={date}
//               className={`date-item ${
//                 selectedDate === date.toLocaleDateString() ? "active" : ""
//               }`}
//               onClick={() => handleDateSelect(date.toLocaleDateString())}
//             >
//               <div className="day-of-week">{dayOfWeek}</div>
//               <div className="day-of-month">{dayOfMonth}</div>
//             </div>
//           ))}
//         </div>
//         <div className="scroll-buttons">
//           <button
//             className="scroll-button scroll-button-right"
//             onClick={() =>
//               dateScrollRef.current.scrollBy({ left: 200, behavior: "smooth" })
//             }
//           >
//             &gt;
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }



import { Link } from "react-router-dom";
// import "./Calender.scss";
import backIcon from "../../assets/capstone-icons/arrow-back-circle.svg";
import React, { useEffect, useState, useRef } from "react";

export default function Calendar({
  onDateSelect,
  selectedDate,
  setSelectedDate,
  tasks,
}) {
  const [currentDate, setCurrentDate] = useState("");
  const [currentDay, setCurrentDay] = useState("");
  const [currentYear, setCurrentYear] = useState("");
  const [currentMonth, setCurrentMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
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
    setCurrentYear(today.getFullYear());
    setCurrentMonth(today.getMonth() + 1);
    setSelectedYear(today.getFullYear());
    setSelectedMonth(today.getMonth() + 1);
    setSelectedDay(today.getDate());
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

  useEffect(() => {
    // Update the filtered tasks when selected year, month, or day changes
    // const filteredTasks = handleTaskFilter();
    // You can use 'filteredTasks' as needed in your component
    // For example, if 'filteredTasks' contains the filtered tasks, you can update the state or display them.
  }, [selectedYear, selectedMonth, selectedDay]);

  const handleDateSelect = (day, month, year) => {
    const selectedDate = new Date(year, month - 1, day);
    setSelectedDate(selectedDate.toLocaleDateString());
    onDateSelect(selectedDate.toLocaleDateString());
  };

  const handleTaskFilter = () => {
    // Filter tasks based on the selected year, month, and day
    return tasks.filter((task) => {
      const taskDate = new Date(task.date);
      return (
        taskDate.getFullYear() === (selectedYear || currentYear) &&
        taskDate.getMonth() + 1 === (selectedMonth || currentMonth) &&
        taskDate.getDate() === (selectedDay || currentDay)
      );
    });
  };

  const generateDates = () => {
    const dates = [];
    const year = selectedYear || currentYear;
    const month = selectedMonth || currentMonth;

    const daysInMonth = new Date(year, month, 0).getDate();

    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month - 1, i);
      const dayOfWeek = date.toLocaleDateString(undefined, {
        weekday: "short",
      });
      const dayOfMonth = date.toLocaleDateString(undefined, { day: "numeric" });

      dates.push({ day: i, month, year, date, dayOfWeek, dayOfMonth });
    }

    return dates;
  };

  const dates = generateDates();

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
      <div className="year-dropdown">
        <select
          className="year__wrapper"
          value={selectedYear || currentYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          {Array.from({ length: 5 }, (_, i) => {
            const yearOption = currentYear + i;
            return (
              <option key={yearOption} value={yearOption}>
                {yearOption}
              </option>
            );
          })}
        </select>
      </div>
      <div className="month-dropdown">
        <select
          className="month__wrapper"
          value={selectedMonth || currentMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          {Array.from({ length: 12 }, (_, i) => {
            const monthOption = i + 1;
            return (
              <option key={monthOption} value={monthOption}>
                {new Date(2000, i, 1).toLocaleDateString(undefined, {
                  month: "long",
                })}
              </option>
            );
          })}
        </select>
      </div>
      <div className="current-date">{currentDate}</div>
      <div className="date-scroll-container">
        <div className="date-scroll" ref={dateScrollRef}>
          {dates.map(({ day, month, year, dayOfWeek, dayOfMonth }) => (
            <div
              key={day}
              className={`date-item ${
                selectedDate === `${year}-${month}-${day}` ? "active" : ""
              }`}
              onClick={() => handleDateSelect(day, month, year)}
            >
              <div className="day-of-week">{dayOfWeek}</div>
              <div className="day-of-month">{dayOfMonth}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

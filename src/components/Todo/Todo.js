import "./Todo.scss";
import checklistIcon from "../../assets/capstone-icons/text-bullet.svg";
import dotsIcon from "../../assets/capstone-icons/dots-icon.svg";
import crossIconSource from "../../assets/capstone-icons/close-24px.svg";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Todo({ tasks, getAllTasks, getIsComplete }) {
  const navigate = useNavigate();
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate =
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    return formattedDate;
  };

  const [modalState, setModalState] = useState(false);
  const [changeCompleteStatus, setChangeCompleteStatus] = useState(false);
  const [chosenTask, setChosenTask] = useState();
  const [remainingTime, setRemainingTime] = useState({});


  const handleModal = (task) => {
    setModalState(true);
    setChosenTask(task);
    getAllTasks();
    getIsComplete();
  };

  const handleCancel = () => {
    setModalState(false);
    getAllTasks();
    getIsComplete();
  };
  const handleItemDelete = async (event) => {
    event.preventDefault();
    try {
      await axios.delete(
        `${process.env.REACT_APP_API_BASE_URL}/todos/${chosenTask.id}`
      );
      getAllTasks();
      setTimeout(() => {
        navigate("/todos");
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };
  const handleComplete = async (event) => {
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      const formattedDate =
      date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
      return formattedDate;
    };
    try {
      await axios.put(
        `${process.env.REACT_APP_API_BASE_URL}/todos/${chosenTask.id}`,
        {
          complete: true,
          user_id: chosenTask.user_id,
          task: chosenTask.task,
          category: chosenTask.category,
          due_at: formatDate(chosenTask.due_at),
        }
      );
      setChangeCompleteStatus(true);
      getIsComplete();
      setTimeout(() => {
        navigate("/todos");
      }, 1000);
    } catch (error) {
      console.log(error);
    }
    
  };

  useEffect(() => {
    getIsComplete();
  }, []);

  // Function to calculate remaining time
  const calculateRemainingTime = (dateString) => {
    const now = new Date();
    const dueDate = new Date(dateString);
    const diffInMilliseconds = dueDate - now;

    if (diffInMilliseconds <= 0) {
      return "Expired";
    }

    const days = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (diffInMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (diffInMilliseconds % (1000 * 60 * 60)) / (1000 * 60)
    );

    return `${days} days ${hours} hours ${minutes} minutes left`;
  };

  // Update remaining time every second
  useEffect(() => {
    const interval = setInterval(() => {
      const updatedRemainingTime = {};

      tasks.forEach((task) => {
        const { due_at } = task;
        updatedRemainingTime[task.id] = calculateRemainingTime(due_at);
      });

      setRemainingTime(updatedRemainingTime);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [tasks]);

  



  return (
    <section className="todo">
      <div className="todo__title-container">
        <h1 className="todo__title">On Going Tasks</h1>
      </div>
      {tasks.slice(0, 2).sort((a,b) => a.created_at - b.created_at).map((task) => (
        <div key={task.id} className="todo__container">
          <div className="todo__checklist-icon">
            <img src={checklistIcon} alt="" />
          </div>
          <div className="todo__text-container">
            <p className="todo__task-title">{task.task}</p>
            <p className="todo__task-date">
                Due Date: {formatDate(task.due_at)}
              </p>
            <p className="todo__remaining-time">
                {calculateRemainingTime(task.due_at)}
              </p>
          </div>
          <p className="todo__dots-icon">
            <img
              src={dotsIcon}
              alt="dots-icon"
              onClick={() => {
                handleModal(task);
              }}
            />
          </p>
        </div>
      ))}
      <div className={`overlay ${modalState ? "" : "hidden"}`}></div>
      {modalState && (
        <div className="modal">
          <img
            className="modal__cross"
            src={crossIconSource}
            alt="cancel"
            onClick={handleCancel}
            style={{ cursor: "pointer" }}
          />
          <h1 className="modal__title">
            Please select {chosenTask.category} task option:
          </h1>
          <p className="modal__message">
            Please confirm that you'd like to complete/delete {chosenTask.task}{" "}
            from the list of tasks. You won't be able to undo this action.
          </p>

          <button className="modal__comp-btn" onClick={handleComplete}>
            Complete
          </button>
          <button
            className="modal__del-btn"
            onClick={(event) => {
              handleItemDelete(event);
            }}
          >
            Remove
          </button>
        </div>
      )}
    </section>
  );
}

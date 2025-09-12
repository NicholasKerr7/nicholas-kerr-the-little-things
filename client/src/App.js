// App routing & data orchestration — includes task fetching and modal handlers.
// NOTE: API base URL is set via REACT_APP_API_BASE_URL; in Docker, client proxies /api to the server.
import "./styles/global.scss";
import Header from "./components/Header/Header";
import LandingPage from "./pages/LandingPage/LandingPage";
import NavBar from "./components/NavBar/NavBar";
import NewTasksPage from "./pages/NewTasksPage/NewTasksPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import MyTaskPage from "./pages/MyTaskPage/MyTaskPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
const API = process.env.REACT_APP_API_BASE_URL || "/api";

export default function App() {
  const [tasks, setTasks] = useState(null);
  const [taskCount, setTaskCount] = useState(undefined);
  const [isComplete, setIsComplete] = useState(false);
  const [modalState, setModalState] = useState(false);
  const [chosenTask, setChosenTask] = useState();
  const [completedTasks, setCompletedTasks] = useState([]);

  const getAllTasks = async () => {
    try {
      const response = await axios.get(
        `${API}/todos/1`
      );
      setTasks(response.data);
      setTaskCount(response.data.length);
    } catch (error) {
      console.log(error);
    }
  };

  const getIsComplete = async () => {
    try {
      const response = await axios.get(
        `${API}/todos/1`
      );
      const filteredArray = response.data.filter((todo) => {
        return todo.complete == 1;
      });
      setIsComplete(filteredArray.length);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllTasks();
    getIsComplete();
  }, []);

  if (!tasks) {
    return <div>loading...</div>;
  }

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
        `${API}/todos/${chosenTask.id}`
      );
      getAllTasks();
      setModalState(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleComplete = async (event) => {
    event.preventDefault();
    const formattedDate = (dateString) => {
      const date = new Date(dateString);
      const formattedDate =
        date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
      return formattedDate;
    };

    try {
      await axios.put(
        `${API}/todos/${chosenTask.id}`,
        {
          complete: 1,
          user_id: chosenTask.user_id,
          task: chosenTask.task,
          category: chosenTask.category,
          due_at: formattedDate(chosenTask.due_at),
        }
      );
      getIsComplete();
      getAllTasks();
      setModalState(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...completedTasks];
    updatedTasks.splice(index, 1);
    setCompletedTasks(updatedTasks);
  };

  return (
    <div className="main">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<RegistrationPage />} />
          <Route
            path="/todos"
            element={
              <LandingPage
                tasks={tasks}
                taskCount={taskCount}
                isComplete={isComplete}
                getIsComplete={getIsComplete}
                getAllTasks={getAllTasks}
                modalState={modalState}
                setModalState={setModalState}
                chosenTask={chosenTask}
                setChosenTask={setChosenTask}
                handleModal={handleModal}
                handleCancel={handleCancel}
                handleItemDelete={handleItemDelete}
                handleComplete={handleComplete}
                completedTasks={completedTasks}
                onDeleteTask={handleDeleteTask}
              />
            }
          />
          <Route
            path="todos/1/tasks"
            element={
              <MyTaskPage
                tasks={tasks}
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
            }
          />
          <Route
            path="1/new-task"
            element={<NewTasksPage getAllTasks={getAllTasks} />}
          />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <NavBar />
      </BrowserRouter>
    </div>
  );
}
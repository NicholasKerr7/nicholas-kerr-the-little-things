import "./styles/global.scss";
import Header from "./components/Header/Header";
import LandingPage from "./pages/LandingPage/LandingPage";
import NavBar from "./components/NavBar/NavBar";
import NewTasksPage from "./pages/NewTasksPage/NewTasksPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import MyTaskPage from "./pages/MyTaskPage/MyTaskPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState(null);
  const [taskCount, setTaskCount] = useState(undefined);
  const [isComplete, setIsComplete] = useState(false);

  const getAllTasks = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/todos/1`
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
        `${process.env.REACT_APP_API_BASE_URL}/todos/1`
      );
      const filteredArray = response.data.filter((todo) => {
        return todo.complete === "1";
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
              />
            }
          />
          <Route path="todos/1/tasks" element={<MyTaskPage tasks={tasks} />} />
          <Route
            path="1/new-task"
            element={<NewTasksPage getAllTasks={getAllTasks} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <NavBar />
      </BrowserRouter>
    </div>
  );
}

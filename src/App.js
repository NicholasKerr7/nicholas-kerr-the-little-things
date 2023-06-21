import "./styles/global.scss";
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
  const [tasks, setTasks] = useState([]);
  const [taskCount, setTaskCount] = useState(undefined);
  // const [dueDate, setDueDate] = useState(null);
  const [isComplete, setIsComplete] = useState(null)

  const getAllTAsks = async () => {
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
  useEffect(() => {
    getAllTAsks();
  }, []);

  // const getDueDate = async () => {
  //   try {
  //     const response = await axios.get(
  //       `${process.env.REACT_APP_API_BASE_URL}/todos/1/due_date`
  //       );
  //       console.log(response);
  //     setDueDate(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   getDueDate();
  // }, []);

  // const getIsComplete = async () => {
  //   try {
  //     const response = await axios.get(
  //       `${process.env.REACT_APP_API_BASE_URL}/todos/1/complete`
  //       );
  //       console.log(response);
  //       setIsComplete(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   getIsComplete();
  // }, []);

  return (
    <div className="main">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegistrationPage />} />
          <Route path="todos/" element={<LandingPage />} />
          <Route path="todos/:user_id/tasks" element={<MyTaskPage />} />
          <Route path="todos/:user_id/new-task" element={<NewTasksPage />} />
        </Routes>
        <NavBar />
      </BrowserRouter>
    </div>
  );
}

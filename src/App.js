import "./styles/global.scss";
import LandingPage from "./pages/LandingPage/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import MyTaskPage from "./pages/MyTaskPage/MyTaskPage";
import NewTasksPage from "./pages/NewTasksPage/NewTasksPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";

export default function App() {
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

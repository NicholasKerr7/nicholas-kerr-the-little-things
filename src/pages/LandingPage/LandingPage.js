import "./landingPage.scss";

import Header from "../../components/Header/Header";
import Todo from "../../components/Todo/Todo";
import DashBoard from "../../components/DashBoard/DashBoard";
import NavBar from "../../components/NavBar/NavBar";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <Header />
      <DashBoard />
      <Todo />
      <NavBar />
    </div>
  );
}

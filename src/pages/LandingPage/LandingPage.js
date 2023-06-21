import "./landingPage.scss";

import Header from "../../components/Header/Header";
import Todo from "../../components/Todo/Todo";
import DashBoard from "../../components/DashBoard/DashBoard";

export default function LandingPage({ tasks, taskCount, isComplete }) {
  return (
    <>
      <div className="landing-page">
        <Header />
        <DashBoard
          tasks={tasks}
          taskCount={taskCount}
          isComplete={isComplete}
        />
        <Todo tasks={tasks} />
      </div>
    </>
  );
}

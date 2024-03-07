import "./landingPage.scss";

import Header from "../../components/Header/Header";
import Todo from "../../components/Todo/Todo";
import DashBoard from "../../components/DashBoard/DashBoard";

export default function LandingPage({
  tasks,
  taskCount,
  isComplete,
  getAllTasks,
  getIsComplete,
  modalState,
  setModalState,
  chosenTask,
  setChosenTask,
  handleModal,
  handleCancel,
  handleItemDelete,
  handleComplete,
  completedTasks,
  onDeleteTask,
  handleDeleteTask,
}) {
  return (
    <>
      <div className="landing-page">
        {/* <Header /> */}
        <DashBoard
          tasks={tasks}
          taskCount={taskCount}
          isComplete={isComplete}
          onDeleteTask={handleDeleteTask}
        />
        <Todo
          tasks={tasks}
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
        />
      </div>
    </>
  );
}

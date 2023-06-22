import "./MyTaskPage.scss";
import Calender from "../../components/Calender/Calender.js";
import Tasks from "../../components/Tasks/Tasks";


export default function MyTaskPage(tasks) {
    return (
      <div className="task-page">
        < Calender/>
        < Tasks tasks={tasks}/>    
      </div>
    );
  }
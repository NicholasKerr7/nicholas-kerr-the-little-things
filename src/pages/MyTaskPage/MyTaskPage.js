import "./MyTaskPage.scss";
import Calender from "../../components/Calender/Calender.js";
import Tasks from "../../components/Tasks/Tasks";


export default function MyTaskPage() {
    return (
      <div className="task-page">
        < Calender/>
        < Tasks/>    
      </div>
    );
  }
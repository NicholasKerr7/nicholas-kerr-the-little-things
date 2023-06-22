import { Link } from "react-router-dom";
import "./Calender.scss";
import backIcon from "../../assets/capstone-icons/arrow-back-circle.svg";

export default function Calender() {
  return (
    <section className="calender">
      <Link to="/todos/">
        <img className="calender__back-icon" src={backIcon} alt="back icon" />
      </Link>
      <div className="calender__category-title">
        <h1>
            MY TASKS
        </h1>
      </div>
      <div className="calender__field"></div>
    </section>
  );
}

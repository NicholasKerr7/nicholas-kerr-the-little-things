import { Link } from "react-router-dom";
import "./Calender.scss";

export default function Calender() {
  return (
    <section className="calender">
      <Link>
        <img className="calender__back-icon" src="" alt="" />
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

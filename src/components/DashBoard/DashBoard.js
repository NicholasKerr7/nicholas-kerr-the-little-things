import "./DashBoard.scss";
import textBullet from "../../assets/capstone-icons/text-bullet.svg";
import checklistIcon from "../../assets/capstone-icons/checklist.svg";
import checklistIcon2 from "../../assets/capstone-icons/checklist-gold.svg";

export default function DashBoard() {
  return (
    <section className="dashboard">
      <div className="dashboard__title-container">
        <h1 className="dashboard__title">Hey Nick!</h1>
      </div>
      <div className="dashboard__cards">
        <div className="dashboard__left-card">
          <img
            className="dashboard__wishlist-icon"
            src={textBullet}
            alt="bulletin-icon"
          />
          <p className="dashboard__left-category">WISHLIST</p>
          <p className="dashboard__left-text">Trip to Dubai</p>
          <p className="dashboard__left-text">New Nike Sneakers</p>
          <p className="dashboard__left-text">New MacBook Pro</p>

        </div>
        <div className="dashboard__right-cards">
          <div className="dashboard__tasks-wrapper">
            <img className="dashboard__check-icon" src={checklistIcon} alt="" />
            <p className="dashboard__right-category">7</p>
            <p className="dashboard__item-counter">TASKS</p>
          </div>
          <div className="dashboard__complete-wrapper">
            <img className="dashboard__check-icon" src={checklistIcon2} alt="" />
            <p className="dashboard__right-category">3</p>
            <p className="dashboard__item-counter">COMPLETE</p>
          </div>
        </div>
      </div>
    </section>
  );
}

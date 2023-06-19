import "./DashBoard.scss";
import textBullet from "../../assets/capstone-icons/text-bullet.svg";
import checklistIcon from "../../assets/capstone-icons/checklist.svg";

export default function DashBoard() {
  return (
    <section className="dashboard">
      <div className="dashboard__title-container">
        <h1 className="dashboard__title">Plan Your Everyday</h1>
      </div>
      <div className="dashboard__cards">
        <div className="dashboard__left-card">
          <img
            className="dashboard__wishlist-icon"
            src={textBullet}
            alt="bulletin-icoon"
          />
          <p className="dashboard__category">test</p>
          <p className="dashboard__text">test</p>
        </div>
        <div className="dashboard__right-cards">
          <div className="dashboard__tasks-wrapper">
            <img src={checklistIcon} alt="" />
            <p className="dashboard__subtitle">test</p>
            <p className="dashboard__due-date">test</p>
          </div>
          <div className="dashboard__activities-wrapper">
            <img src={checklistIcon} alt="" />
            <p className="dashboard__subtitle">test</p>
            <p className="dashboard__due-date">test</p>
          </div>
        </div>
      </div>
    </section>
  );
}

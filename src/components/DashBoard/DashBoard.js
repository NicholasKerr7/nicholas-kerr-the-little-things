import "./DashBoard.scss";
import textBullet from "../../assets/capstone-icons/text-bullet.svg";
import checklistIcon from "../../assets/capstone-icons/checklist.svg";

export default function DashBoard() {
  return (
    <section className="dashboard">
      <div className="dashboard__title-container">
        <h1 className="dashboard__title">Plan Your Everyday</h1>
      </div>
      <div className="dashboard__left-container">
        <img
          className="dashboard__wishlist-icon"
          src={textBullet}
          alt="bulletin-icoon"
        />
        <p className="dashboard__subtitle">test</p>
        <p className="dashboard__text">test</p>
      </div>
      <div className="dashboard__right-container">
        <div className="dashboard__tasks-wrapper">
          <img src={checklistIcon} alt="" />
          <p>test</p>
          <p>test</p>
        </div>
        <div className="dashboard__activities-wrapper">
          <img src={checklistIcon} alt="" />
          <p>test</p>
          <p>test</p>
        </div>
      </div>
    </section>
  );
}

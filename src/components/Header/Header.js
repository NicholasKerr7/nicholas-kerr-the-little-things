import "./Header.scss";
import userIcon from "../../assets/capstone-icons/user-icon.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo"></div>
      <div className="header__title-container">
        <p className="header__title">THE LITTLE THINGS</p>
      </div>
      <div className="header__profile">
        <img src={userIcon} alt="user icon" />
      </div>
    </header>
  );
}

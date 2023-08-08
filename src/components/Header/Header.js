import "./Header.scss";
import Applogo from "../../assets/capstone-icons/the-little-things.png";

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo-container">
        <img className="header__logo" src={Applogo} alt="usericon" />
      </div>
      <div className="header__title-container">
        {/* <p className="header__title">THE LITTLE THINGS</p> */}
      </div>
      <div className="header__profile"></div>
    </header>
  );
}

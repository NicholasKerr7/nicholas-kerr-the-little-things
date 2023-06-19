
import "./Header.scss";
import userIcon from "../../assets/capstone-icons/user-icon.svg";

export default function Header () {
  return (
<head className="header">
    <div className="header__logo"></div>
    <div className="header__title">
      <h1>
        THE LITTLE THINGS
      </h1>
    </div>
    <div className="header__profile">
      <img src={userIcon} alt="user icon" />
    </div>
</head>
  )
};

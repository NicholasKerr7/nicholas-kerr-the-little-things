import { Link } from "react-router-dom";
import "./NavBar.scss";
import HomeIcon from "../../assets/capstone-icons/home-icon.svg";
import TodoIcon from "../../assets/capstone-icons/todo-icon.svg";
import ProfileIcon from "../../assets/capstone-icons/profile-icon.svg";
import CreateIcon from "../../assets/capstone-icons/create-icon.svg";
import SharedListIcon from "../../assets/capstone-icons/sharedList.svg";

export default function NavBar () {
    return (
  <section className="navbar">
    <div className="navbar__container-left">
    <Link to="/todos" >
        <img className="navbar__home" src={HomeIcon} alt="" />
      </Link>
      <Link to="todos/1/tasks" >
        <img className="navbar__todo" src={TodoIcon} alt="" />
      </Link>
    </div>
    <div className="navbar__container-center">
      <Link className="navbar__create-link" to="1/new-task" >
        <img className="navbar__create" src={CreateIcon} alt="" />
      </Link>
    </div>
    <div className="navbar__container-right">
    <Link to="" >
        <img className="navbar__stats" src={SharedListIcon} alt="" />
      </Link>
      <Link to="/" >
        <img className="navbar__profile" src={ProfileIcon} alt="" />
      </Link>
    </div>
  </section>
    )
  };
import { Link } from "react-router-dom";
import "./RegistrationPage.scss";
import backIcon from "../../assets/capstone-icons/arrow-back-circle.svg";

export default function RegistrationPage() {
  return (
    <section className="registration">
      <div className="registration__header-container">
      <Link className="registration__back-btn-container" to="todos/">
        <img className="registration__back-btn" src={backIcon} alt="back icon" />
      </Link>
        <h1 className="registration__title">Registration</h1>
      </div>
      <form className="registration__form">
        <div className="registration__name-container">
          <label className="registration__name-title" htmlFor="form-label">
            Name
          </label>
          <input
            className="registration__name-input"
            name="name"
            type="text"
            placeholder="Enter Your name"
          />
        </div>
        <div className="registration__username-container">
          <label className="registration__username-title" htmlFor="form-label">
            User Name
          </label>
          <input
            className="registration__username-input"
            name="user-name"
            type="text"
            placeholder="Create A Username"
          />
        </div>{" "}
        <div className="registration__username-container">
          <label className="registration__username-title" htmlFor="form-label">
            Password
          </label>
          <input className="registration__username-input" name="password" type="text" placeholder="Enter Your Password" />
        </div>
        <div className="registration__Conf-Pwd-container">
          <label className="registration__Conf-Pwd-title" htmlFor="form-label">
            Confirm Password
          </label>
          <input className="registration__Conf-Pwd-input" name="confirm-password" type="text" placeholder="Re-enter Your Password" />
        </div>
        <div className="registration__paragraph-container">
          <input className="registration__checkbox" type="checkbox" />
          <p className="registration__paragraph">I agree with the terms and conditions and also the protection of my personal data on this application.</p>
        </div>
        <Link className="registration__reg-btn-link" to="">
          <p className="registration__reg-btn">Register</p>
        </Link>
        <Link className="registration__log-btn-link" to="todos/:user_id">
          <p className="registration__log-btn">Login</p>
        </Link>
      </form>
    </section>
  );
}

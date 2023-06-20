import { Link } from "react-router-dom";
import "./RegistrationPage.scss";

export default function RegistrationPage() {
  return (
    <section className="registration">
      <Link className="registration__" to="">
        {/* <img className="" src="" alt="" /> */}
      </Link>
      <div className="registration__">
        <h1 className="">Registration</h1>
      </div>
      <form className="registration__">
        <div className="">
          <label className="" htmlFor="form-label">
            name
          </label>
          <input
            className=""
            name="name"
            type="text"
            placeholder="Enter Your name"
          />
        </div>
        <div className="">
          <label className="" htmlFor="form-label">
            User Name
          </label>
          <input
            className=""
            name="user-name"
            type="text"
            placeholder="Create A Username"
          />
        </div>{" "}
        <div className="">
          <label className="" htmlFor="form-label">
            Password
          </label>
          <input className="" name="password" type="text" placeholder="Enter Your Password" />
        </div>
        <div className="">
          <label className="" htmlFor="form-label">
            Confirm Password
          </label>
          <input className="" name="confirm-password" type="text" placeholder="Re-enter Your Password" />
        </div>
        <div className="">
          <input className="" type="checkbox" />
          <p className="">I agree with the terms and conditions and also the protection of my personal data on this application.</p>
        </div>
        <Link to="">
          <p className="">Register</p>
        </Link>
        <Link to="">
          <p className="">Login</p>
        </Link>
      </form>
    </section>
  );
}

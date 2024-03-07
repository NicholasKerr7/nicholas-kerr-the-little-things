import React, { useState } from 'react';

export default function LoginPage() {
  const [rememberMe, setRememberMe] = useState(false);
  const [inputValues, setInputValues] = useState({
    username: '',
    password: '',
  });

  const handleRememberMeClick = () => {
    setRememberMe(!rememberMe);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  
  //   // Validation logic here
  //   const trimmedUsername = inputValues.username.trim();
  //   const trimmedPassword = inputValues.password.trim();
  
  //   // Check if username and password are not empty
  //   if (trimmedUsername === '' || trimmedPassword === '') {
  //     console.log('Please enter both username and password');
  //     return;
  //   }
  
  //   // Check username format (e.g., only alphanumeric characters and underscore)
  //   const usernameRegex = /^[a-zA-Z0-9_]+$/;
  //   if (!usernameRegex.test(trimmedUsername)) {
  //     console.log('Invalid username format');
  //     return;
  //   }
  
  //   // Check minimum password length
  //   if (trimmedPassword.length < 8) {
  //     console.log('Password must be at least 8 characters long');
  //     return;
  //   }
  
  //   // Simulate a successful login (replace this with your actual authentication logic)
  //   const isLoginSuccessful = true;
  
  //   if (isLoginSuccessful) {
  //     console.log('Login success');
  
  //     // Redirect to a new page or perform other actions for successful login
  //   } else {
  //     console.log('Login failed. Please check your credentials.');
  //   }
  // };
  
  return (
    <div className="section">
      <div className="frame">
        <div className="login">
          <div className="login--bg">
            <img src="https://preview.ibb.co/dktKWL/bg-1.jpg" alt="" />
          </div>
          <div className="login__header">
            <div className="login__header--cont">
              <span className="back-button">
                <i className="fas fa-chevron-left"></i>
              </span>
              <span className="logo">
                <i className="fab fa-pied-piper-alt"></i>
              </span>
              <div className="user">
                <i className="fas fa-user"></i>
              </div>
            </div>
          </div>
          <div className="login__content">
            <div className="login--profile">
              <i className="login--icon fas fa-user"></i>
            </div>
            <h3 className="login--title">LOGIN</h3>
            {/* <form onSubmit={handleSubmit} className="login--form"> */}
            <form className="login--form">

              <div className="input--item">
                {/* <div className={`input__content $Add error class logic`}> */}
                <div className={`input__content $Add error class logic`}>

                  <input
                    type="text"
                    name="username"
                    value={inputValues.username}
                    onChange={handleInputChange}
                    placeholder="User Name"
                  />
                </div>
              </div>
              <div className="input--item">
                <div className={`input__content $Add error class logic`}>
                  <input
                    type="password"
                    name="password"
                    value={inputValues.password}
                    onChange={handleInputChange}
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="login--remember">
                <div className="remember--check js-remember--check">
                  <div
                    className={`remember--check--box ${
                      rememberMe ? 'active' : ''
                    }`}
                    onClick={handleRememberMeClick}
                  ></div>
                  <span className="remember--check--txt">Remember Me</span>
                </div>
              </div>
              <button type="submit" className="login--button">
                LOGIN
              </button>
            </form>
            <div className="register--social">
              <span className="register--or">OR</span>
              <div className="register--container">
                <span className="register--item">
                  <i className="fab fa-facebook-f"></i>
                </span>
                <span className="register--item">
                  <i className="fab fa-twitter"></i>
                </span>
              </div>
            </div>
            <div className="login__pagination">
              <div className="pagination--item active"></div>
              <div className="pagination--item"></div>
              <div className="pagination--item"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

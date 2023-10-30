export default function LoginPage() {
  return (
    <div className="section">
        <div className="frame">
            <div className="login">
                <div className="login--bg">
                    <img src="https://preview.ibb.co/dktKWL/bg-1.jpg" alt="">
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
                    <h3 className="login--title">LOGİN</h3>
                    <form action="" className="login--form">

                        <div className="input--item">
                            <div className="js-input__content input__content has-error">
                                <input type="text" className="form__input js-input js-input-error" placeholder="User Name">
                            </div>
                        </div>

                        <div className="input--item">
                            <div className="js-input__content input__content has-error">
                                <input type="text" className="form__input js-input js-input-error" placeholder="User Name">
                            </div>
                        </div>

                        <div className="login--remember">
                            <div className="remember--check js-remember--check">
                                <div className="remember--check--box">
                                    <div className="remember--check--box-in js-check-box-in"></div>
                                </div>

                                <span className="remember--check--txt">Remember Me</span>

                            </div>
                        </div>

                        <button className="login--button">LOGİN</button>

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
};

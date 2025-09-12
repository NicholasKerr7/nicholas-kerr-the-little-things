import "./LoginPage.scss";
export default function LoginPage() {
  const handleGoogle = () => {
    const base = process.env.REACT_APP_API_BASE_URL || "/api";
    window.location.href = `${base}/auth/google`;
  };
  return (
    <section className="login">
      <div className="login__card">
        <h1 className="login__title">Welcome Back</h1>
        <p className="login__subtitle">Sign in to manage your tasks.</p>
        <button className="login__google" onClick={handleGoogle}>
          <img src="/google.svg" alt="" className="login__icon" />
          Continue with Google
        </button>
      </div>
    </section>
  );
}

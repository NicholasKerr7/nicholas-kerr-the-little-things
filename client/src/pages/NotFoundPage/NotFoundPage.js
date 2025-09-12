import "./NotFoundPage.scss";

export default function NotFoundPage() {
  return (
    <div className="error">
      <div className="error__content">
        <h1 className="error__code">404</h1>
        <h2 className="error__message">Page Not Found</h2>
        <p className="error__description">
          Oops! The page you are looking for might have been removed or it is
          temporarily unavailable.
        </p>
        <a className="error__link" href="/">
          Go back to Home
        </a>
      </div>
    </div>
  );
}

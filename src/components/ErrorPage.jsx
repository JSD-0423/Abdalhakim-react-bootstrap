import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div
      style={{ height: '100vh' }}
      className="d-flex align-items-center justify-content-center flex-column fw-bold"
    >
      <p className="fs-4">
        {error.statusText} || {error.status}
      </p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default ErrorPage;

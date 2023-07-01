import React from 'react';

const ErrorMessage = ({ message }) => {
  return (
    <div
      className="align-items-center d-flex fs-4 fw-bolder justify-content-center text-danger"
      style={{ height: '20rem' }}
    >
      {message}
    </div>
  );
};

export default ErrorMessage;

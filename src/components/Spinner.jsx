import { Spinner as BootstrapSpinner } from 'react-bootstrap';

const Spinner = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: '20rem' }}
    >
      <BootstrapSpinner animation="grow" />
    </div>
  );
};

export default Spinner;

import { Container } from 'react-bootstrap';
import Shape from './Shape';

const Banner = () => {
  return (
    <div
      className="bg-default position-relative d-flex justify-content-center align-items-end overflow-hidden"
      style={{ height: '7.5rem' }}
    >
      <div className="position-absolute top-0 start-0 end-0 overflow-hidden h-100">
        <Shape direction="left" />
        <Shape direction="right" />
      </div>
      <Container
        fluid
        className="custom-container position-absolute lh-1 mb-1 d-flex justify-content-center align-items-end"
      >
        <div className="bg-default">
          <h2 className="fw-bolder fs-5 secondary-color">
            Welcome to our website!
          </h2>
          <p className="body-text mb-2">
            We have a new design that&apos;s fresh, modern, and easy to use.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Banner;

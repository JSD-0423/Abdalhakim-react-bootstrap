import React from 'react';

const Footer = () => {
  return (
    <footer className="body-text d-flex justify-content-center align-items-center gap-1 pb-3 pt-3">
      Developed with
      <ion-icon
        name="heart"
        style={{ color: 'red' }}
        class="fs-4 hydrated"
      ></ion-icon>
      &copy; 2023
    </footer>
  );
};

export default Footer;

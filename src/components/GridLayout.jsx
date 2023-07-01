import React from 'react';

const GridLayout = ({ children }) => {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6 g-4 cards">
      {children}
    </div>
  );
};

export default GridLayout;

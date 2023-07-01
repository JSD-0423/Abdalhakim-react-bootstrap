const Shape = ({ direction }) => {
  return (
    <div
      className="position-relative"
      style={direction === 'right' ? right : left}
    ></div>
  );
};

const left = {
  top: '-3rem',
  transform: 'skewY(-3deg)',
  height: '5rem',
  background:
    'linear-gradient( 90deg, rgba(7, 104, 160, 1) 0%, rgba(6, 123, 153, 1) 24%, rgba(3, 193, 128, 1) 100% )',
  zIndex: '2',
};

const right = {
  top: '-8rem',
  transform: 'skewY(3deg)',
  height: '5rem',
  background:
    'linear-gradient( 90deg, rgba(7, 104, 160, 1) 0%, rgb(19 211 128) 24%, rgba(3, 193, 128, 1) 100% )',
  zIndex: '1',
};

export default Shape;

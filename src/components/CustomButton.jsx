import { Button } from 'react-bootstrap';

const CustomButton = ({
  BtnStyle,
  text,
  textStyle,
  iconName,
  iconId,
  iconStyle,
  onClick,
}) => {
  return (
    <Button className={BtnStyle} onClick={onClick}>
      <ion-icon class={iconStyle} name={iconName} id={iconId}></ion-icon>
      <span className={textStyle}>{text}</span>
    </Button>
  );
};

export default CustomButton;

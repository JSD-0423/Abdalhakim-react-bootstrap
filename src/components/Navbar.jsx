import { ButtonGroup, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomButton from './CustomButton';
import { useContext } from 'react';
import { ToggleThemeContext } from '../context/theme';
import { FavoriteContext } from '../context/FavoriteContext';

const Navbar = () => {
  const [isDark, toggleTheme] = useContext(ToggleThemeContext);
  const [_, toggleFavorite] = useContext(FavoriteContext);

  return (
    <Container
      fluid
      className="custom-container d-flex justify-content-between align-items-center py-3 bg-default"
    >
      <Link to="/">
        <h1 className="fs-6 primary-color">Web Topics</h1>
      </Link>

      <ButtonGroup className="">
        <CustomButton
          BtnStyle="d-flex align-items-center px-2 py-1 border-secondary-subtle bg-default body-text rounded me-2"
          text={isDark ? 'Light Mode' : 'Dark Mode'}
          textStyle="d-none d-sm-inline"
          iconName={isDark ? 'sunny-outline' : 'moon-outline'}
          iconId="mode-icon"
          iconStyle="me-sm-2 hydrated"
          onClick={() => toggleTheme()}
        />
        <CustomButton
          BtnStyle="d-flex align-items-center px-2 py-1 border-secondary-subtle bg-default body-text rounded me-1"
          text="Favorites"
          textStyle="d-none d-sm-inline"
          iconName="heart-outline"
          iconId="favorite-icon"
          iconStyle="me-sm-2 hydrated"
          onClick={() => toggleFavorite()}
        />
      </ButtonGroup>
    </Container>
  );
};

export default Navbar;

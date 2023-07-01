import { Outlet } from 'react-router-dom';
import { ThemeProvider } from './context/theme';
import { Footer, Header } from './components';

import './index.css';
import { useContext, useState } from 'react';
import Favorite from './components/Favorite';
import { FavoriteContext } from './context/FavoriteContext';

function App() {
  const [favorite] = useContext(FavoriteContext);

  return (
    <ThemeProvider>
      <Header />
      <Outlet />
      <Footer />
      {favorite.show && <Favorite show={favorite.show} />}
    </ThemeProvider>
  );
}

export default App;

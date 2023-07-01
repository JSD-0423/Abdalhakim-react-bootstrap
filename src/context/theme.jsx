import { createContext, useEffect, useState } from 'react';

const ToggleThemeContext = createContext();

const getThemeValue = () => {
  return JSON.parse(localStorage.getItem('theme')) || false;
};

const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(getThemeValue());

  const toggleTheme = () => {
    setIsDark((prevValue) => {
      const newValue = !prevValue;
      localStorage.setItem('theme', JSON.stringify(newValue));
      return newValue;
    });
  };

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(isDark));
    document.body.className = isDark ? 'dark' : 'light';
  }, [isDark]);

  return (
    <ToggleThemeContext.Provider value={[isDark, toggleTheme]}>
      {children}
    </ToggleThemeContext.Provider>
  );
};

export { ToggleThemeContext, ThemeProvider };

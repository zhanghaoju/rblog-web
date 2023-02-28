import React, { useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import UseDarkSide from './UseDarkSide';

const Switcher = () => {
  const [colorTheme, setTheme] = UseDarkSide();
  const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false);
  const toggleDarkMode = (checked:boolean) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={25} />;
}

export default Switcher;

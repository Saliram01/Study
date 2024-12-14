import React, { useContext } from "react";
import { FiSun } from "react-icons/fi";
import { BiSolidMoon } from "react-icons/bi";
import { CountryContext } from "../context/Context";

function Header() {
  const {theme, setTheme} = useContext(CountryContext);

  function handleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <div className={`container ${theme}`}>
      <header>
        <h2>Where is the world?</h2>
        <div className="theme"> 
          {theme === 'light'? <FiSun onClick={handleTheme}/> : <BiSolidMoon onClick={handleTheme}/>}
          <span>Light Mode</span>
        </div>
      </header>
    </div>
  );
}

export default Header;

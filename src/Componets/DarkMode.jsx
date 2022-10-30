import React, { useEffect, useState } from "react";

import { FaSun, FaMoon } from "react-icons/fa";

const DarkMode = () => {
  const [theme, setTheme] = useState("light-theme");
  const [toggle, setToggle] = useState(false);

  const toggleTheme = () => {
    // use ternary operator
    theme === "dark-theme" ? setTheme("light-theme") : setTheme("dark-theme");

    setToggle(!toggle);
  };

  useEffect(() => {
    document.body.className = theme;

    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <>
      <div onClick={toggleTheme} className="dark-icon">
        {toggle ? <FaSun /> : <FaMoon />}
      </div>
    </>
  );
};

export default DarkMode;

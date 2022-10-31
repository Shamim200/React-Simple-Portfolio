import React, { useEffect, useState } from "react";

import { FaSun, FaMoon } from "react-icons/fa";

const DarkMode = () => {
  const [theme, setTheme] = useState("light-theme");
  const [toggle, setToggle] = useState(false);

  const toggleTheme = () => {
    // traditional

    // if (theme === "dark-theme") {
    //   localStorage.setItem("theme", "light-theme");
    //   setTheme("light-theme");
    // } else {
    //   localStorage.setItem("theme", "dark-theme");

    //   setTheme("dark-theme");
    // }

    // use ternary operator

    theme === "dark-theme"
      ? setTheme("light-theme") || localStorage.setItem("theme", "light-theme")
      : setTheme("dark-theme") || localStorage.setItem("theme", "dark-theme");

    setToggle(!toggle);
  };

  useEffect(() => {
    document.body.className = theme;

    const useLocalStorage = localStorage.getItem("theme");

    // traditional
    // if (useLocalStorage) {
    //   setTheme(useLocalStorage);
    // }

    // use ternary operator

    useLocalStorage: setTheme(useLocalStorage);
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

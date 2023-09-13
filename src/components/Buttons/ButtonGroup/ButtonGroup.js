import React, { useEffect, useState } from "react";
import styles from "./ButtonGroup.module.scss";
import { useSelector } from "react-redux";


function ButtonGroup({ buttons , onButtonSelect}) {
  const [selectedButton, setSelectedButton] = useState(null);
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  const emptyFunc = () => {

  }

  onButtonSelect = onButtonSelect ?? emptyFunc;

  function buttonClickHandler(event) {
    setSelectedButton(event.target.id);
    onButtonSelect(event.target.id);
    
  }

  
  useEffect(() => {
    onButtonSelect(selectedButton);
  }, [selectedButton]);

  return (
    <div
      className={
        isDarkMode ? styles.btnGroupDarkTheme : styles.btnGroupLightTheme
      }
    >
      {buttons.map((item) => (
        <button
          className={`${
            isDarkMode === false
              ? selectedButton === item
                ? styles.selectedBtnLightTheme
                : styles.btnLightTheme
              : isDarkMode === true
              ? selectedButton === item
                ? styles.selectedBtnDarkTheme
                : styles.btnDarkTheme
              : null
          }`}
          key={item}
          id={item}
          onClick={buttonClickHandler}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default ButtonGroup;

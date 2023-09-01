import React, { useState } from "react";
import styles from "./ToggleButton.module.scss";
import { ReactComponent as ToggleButtonIcon } from "../../../assets/icons/button-icons/toggle-button-icon.svg";
import { useSelector } from "react-redux";

function ToggleButton({ onClick }) {
  const [isToggleActive, setIsToggleActive] = useState(false);
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  function toggleBtnHandler() {
    setIsToggleActive((prevState) => !prevState);
    if (typeof onClick === "function") {
      onClick(); // Only call onClick if it's a function
    }
  }

  return (
    <div
      className={`${
        isDarkMode ? styles.toggleBtnDarkTheme : styles.toggleBtnLightTheme
      } ${isToggleActive ? styles.toggleBtnActive : null}`}
      onClick={toggleBtnHandler}
    >
      <ToggleButtonIcon className={styles.toggleIcon} />
    </div>
  );
}

export default ToggleButton;

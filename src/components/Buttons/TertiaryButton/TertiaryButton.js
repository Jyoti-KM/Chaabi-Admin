import React from "react";
import styles from "./TertiaryButton.module.scss";
import { useSelector } from "react-redux";

function TertiaryButton(props) {
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  return (
    <button
      className={
        isDarkMode ? styles.tertiaryBtnDarkTheme : styles.tertiaryBtnLightTheme
      }
      disabled={props.disabled}
      onClick={props.onClick}
    >
    {props.leftIcon && (
        <img className={styles.img} src={props.leftIcon} alt="icon" />
      )}

      <p className={styles.p}>{props.text}</p>
    </button>
  );
}

export default TertiaryButton;

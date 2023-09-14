import React from "react";
import styles from "./SecondaryButton.module.scss";
import { useSelector } from "react-redux";

function SecondaryButton( props ) {
  const isDarkMode = useSelector((state) => state.theme.darkMode);
  return (
    <button
      className={
        isDarkMode
          ? styles.secondaryBtnDarkTheme
          : styles.secondaryBtnLightTheme
      }

      disabled={props.disabled}
      onClick={props.onClick}
     
    >
      {props.leftIcon && (
        <img className={styles.img} src={props.leftIcon} alt="icon" />
      )}


      <p className={styles.p}>{props.text}</p>
      {props.rightIcon && (
        <img className={styles.img} src={props.rightIcon} alt="icon" />
      )}
    </button>
  );
}

export default SecondaryButton;

import React from "react";
import styles from "./PrimaryButton.module.scss";
import { useSelector } from "react-redux";



function PrimaryButton(props) {
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  return (
    <button
      className={
        isDarkMode ? styles.primaryBtnDarkTheme : styles.primaryBtnLightTheme
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

export default PrimaryButton;

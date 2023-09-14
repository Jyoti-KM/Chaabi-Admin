import React from "react";
import styles from "./PrimaryButton.module.scss";
import { useSelector } from "react-redux";

const img = '';

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
     { img ?? <img className={styles.img} src={props.srcLeft} alt="icon" />}

      <p className={styles.p}>{props.text}</p>
     { img ?? <img className={styles.img} src={props.srcRight} alt="icon" />
}
    </button>
  );
}

export default PrimaryButton;

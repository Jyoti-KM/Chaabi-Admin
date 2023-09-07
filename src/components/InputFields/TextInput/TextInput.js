import React from "react";
import styles from "./TextInput.module.scss";
import { useSelector } from "react-redux";

function TextInput(props) {
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className={styles.emailInputContainer}>
      <label
        htmlFor="text-input"
        className={isDarkMode ? styles.labelDarkTheme : styles.labelLightTheme}
      >
        {props.label}{props.isRequired ? "" : <span> *</span>}
      </label>
      <input
        className={isDarkMode ? styles.inputDarkTheme : styles.inputLightTheme}
        type={props.type}
       
        id="text-input"
        disabled={props.isDisabled}
        required={props.isRequired}
        placeholder={props.placeholder}
      />
      <p
        className={
          isDarkMode ? styles.helperTextDarkTheme : styles.helperTextLightTheme
        }
      >
        {props.helperText}
      </p>
    </div>
  );
}

export default TextInput;
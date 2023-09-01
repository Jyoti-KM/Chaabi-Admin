import React from "react";
import styles from "./EmailInput.module.scss";
import { useSelector } from "react-redux";

function EmailInput(props) {
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className={styles.emailInputContainer}>
      <label
        htmlFor="email-input"
        className={isDarkMode ? styles.labelDarkTheme : styles.labelLightTheme}
      >
        {props.label}
      </label>
      <input
        className={isDarkMode ? styles.inputDarkTheme : styles.inputLightTheme}
        type="email"
        name="email-input"
        id="email-input"
        disabled={props.disabled}
        required={props.required}
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

export default EmailInput;

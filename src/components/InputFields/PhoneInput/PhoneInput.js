import React from "react";
import styles from "./PhoneInput.module.scss";
import { ReactComponent as DownArrow } from "../../../assets/icons/chevron-down.svg";
import { useSelector } from "react-redux";

function PhoneInput(props) {
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className={styles.phoneInputContainer}>
      <label
        htmlFor="phone-input"
        className={isDarkMode ? styles.labelDarkTheme : styles.labelLightTheme}
      >
        {props.label}
      </label>

      <div
        className={
          isDarkMode
            ? styles.inputContainerDarkTheme
            : styles.inputContainerLightTheme
        }
      >
        <div
          className={
            isDarkMode ? styles.dropdownDarkTheme : styles.dropdownLightTheme
          }
        >
          IN <DownArrow />
        </div>
        <input
          className={
            isDarkMode ? styles.inputDarkTheme : styles.inputLightTheme
          }
          type="tel"
          name="phone-input"
          id="phone-input"
          disabled={props.disabled}
          required={props.required}
          placeholder={props.placeholder}
        />
      </div>
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

export default PhoneInput;

import React from "react";
import styles from "./NumberInput.module.scss";
import { ReactComponent as DownArrow } from "../../../assets/icons/chevron-down.svg";
import { useSelector } from "react-redux";

function NumberInput(props) {
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  return (
    <form className={styles.phoneInputContainer}>
      <label
        htmlFor="phone-input"
        className={isDarkMode ? styles.labelDarkTheme : styles.labelLightTheme}
      >
        {props.label}{props.isRequired ? "" : <span> *</span>}
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
          type={props.type}
          name="phone-input"
          id="phone-input"
          disabled={props.isDisabled}
        required={props.isRequired}
        placeholder={props.placeholder}
        maxlength="10"
        />
      </div>
      <p
        className={
          isDarkMode ? styles.helperTextDarkTheme : styles.helperTextLightTheme
        }
      >
        {props.helperText}
      </p>
    </form>
  );
}

export default NumberInput;

import React from "react";
import styles from "./TextInput.module.scss";
import { ReactComponent as SearchIcon } from "../../../assets/icons/search-icon.svg";

function TextInput({ placeholder, required, disabled }) {
  return (
    <div className={styles.textInputContainer}>
      <SearchIcon />
      <input
        className={styles.input}
        type="text"
        placeholder={placeholder}
        required={required}
        disabled={disabled}
      />
    </div>
  );
}

export default TextInput;

import React from "react";
import styles from "./searchInput.module.scss";
import { ReactComponent as SearchIcon } from "../../../assets/icons/search-icon.svg";

function SearchInput({ placeholder, required, disabled }) {
  return (
    <div className={styles.searchInputContainer}>
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

export default SearchInput;

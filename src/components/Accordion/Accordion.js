import React from "react";
import styles from "./Accordion.module.scss";
import Tab from "./Tab/Tab";

function Accordion({ tabs }) {
  return (
    <div className={styles.accordionContainer}>
      {tabs.map((item, index) => (
        <Tab item={item} key={index} />
      ))}
    </div>
  );
}

export default Accordion;

import React, { useState } from "react";
import styles from "./TabGroup.module.scss";

function TabGroup({ tabs ,label }) {
  const [selectedTab, setSelectedTab] = useState(null);
  function TabClickHandler(event) {
    console.log(event.target.id);
    setSelectedTab(event.target.id);
  }

  return (
    <div className={styles.Tabs}>
    <label className={styles.label}>{label}</label>
    <div className={styles.tabGroupContainer}>
    
      {tabs.map((item) => (
        <button
          className={selectedTab === item ? styles.selectedTab : styles.tab}
          key={item}
          id={item}
          onClick={TabClickHandler}
        >
          {item}
        </button>
      ))}
    </div>
    </div>
  );
}

export default TabGroup;

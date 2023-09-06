import React from "react";
import styles from "./CardBackground.module.scss";

function CardBackground(props) {
	return <div className={styles.cardBackground}>{props.children}</div>;
}

export default CardBackground;

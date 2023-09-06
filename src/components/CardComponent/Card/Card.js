import React from "react";
import styles from "./Card.module.scss";
import CardBackground from "../CardBackground/CardBackground";

function Card(props) {
	return (
		<CardBackground>
			<div className={styles.card}>
				<div className={styles.header}>
					<h3>{props.heading}</h3>
					<button onClick={props.onCancel}>&#10005;</button>
				</div>
				<div className={styles.body}>{props.children}</div>
			</div>
			;
		</CardBackground>
	);
}

export default Card;

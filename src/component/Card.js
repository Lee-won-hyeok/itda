import React from "react";
import styles from "./Card.module.scss";

export default function Card({ title, text, tags }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.tags}>
          {tags.map((i) => (
            <span>#{i}</span>
          ))}
        </div>

        <div className={styles.col}>
          <h2>{title}</h2>
          <span>{text}</span>
        </div>
      </div>
    </div>
  );
}

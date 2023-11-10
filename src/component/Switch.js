import React from "react";
import styles from "./Switch.module.scss";

export default function Switch({ activated, setActivated }) {
  return (
    <div className={styles.wrapper}>
      <div
        className={
          activated ? `${styles.container} ${styles.active}` : styles.container
        }
        onClick={() => setActivated((state) => !state)}
      >
        <div
          className={
            activated ? `${styles.ball} ${styles.active}` : styles.ball
          }
        ></div>
      </div>
    </div>
  );
}

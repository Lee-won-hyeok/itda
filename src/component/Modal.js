import React from "react";
import styles from "./Modal.module.scss";

export default function Modal({ active, setActive, children }) {
  return active ? (
    <div className={styles.wrapper} onClick={() => setActive(false)}>
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  ) : (
    <></>
  );
}

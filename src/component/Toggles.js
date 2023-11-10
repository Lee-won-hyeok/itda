import React, { useState } from "react";
import styles from "./Toggles.module.scss";

export default function Toggles({ attrs, state, setState }) {
  const setToggle = (idx) => setState((state) =>{
    if(!getToggle(idx)) return state | (1 << idx);
    return state & ~(1 << idx);
  });
  const getToggle = (idx) => state & (1 << idx);
  const onClickHandler = (e) => {
    alert(e.target);
  };
  return (
    <div className={styles.container}>
      {attrs.map((item, idx) => (
        <div
          className={
            getToggle(idx)
              ? `${styles.toggle} ${styles.on}`
              : `${styles.toggle}`
          }
          key={idx}
          onClick={() => setState && setToggle(idx)}
        >
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}

import React from "react";
import styles from "./Paginator.module.scss";

export default function Pagenator({ size, index, setIndex }) {
  const _for = (size, el) => {
    let ret = [];
    for (let i = 0; i < size; i++) {
      ret.push(el);
    }
    return ret;
  };
  const prevOnClickHandler = () => {
    if(index !== 0) setIndex((state) => state - 1);
  }
  const nextOnClickHandler = () => {
    if(index !== size-1) setIndex((state) => state + 1);
  }
  return (
    <div className={styles.container}>
      {/* <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      /> */}
      <div className={styles.next}>
        <button type="button" onClick={prevOnClickHandler}>
          <span class="material-symbols-outlined">navigate_before</span>
        </button>
      </div>
      {_for(size, <div className={styles.page}></div>).map((i, idx) => 
        idx === index ? <div className={`${styles.page} ${styles.current}`}></div> : i
      )}
      <div className={styles.next}>
        <button type="button" onClick={nextOnClickHandler}>
          <span class="material-symbols-outlined">navigate_next</span>
        </button>
      </div>
    </div>
  );
}

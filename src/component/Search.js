import React from "react";
import styles from "./Search.module.scss";

export default function Search({ placeholder, onClick, value, setValue }) {
  return (
    <div className={styles.container}>
      <input className={styles.search} type="text" placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)}/>
      <div className={styles.iconarea} onClick={onClick}>
        {/* <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        /> */}
        <span class="material-symbols-outlined">search</span>
      </div>
    </div>
  );
}

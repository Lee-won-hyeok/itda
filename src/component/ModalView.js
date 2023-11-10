import React from "react";
import styles from "./ModalView.module.scss";

export default function ModalView ({children}) {
    return <div className={styles.wrapper}>
        <div className={styles.body}>
            { children }
        </div>
    </div>
}

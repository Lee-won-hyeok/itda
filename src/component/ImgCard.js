import React from "react";
import styles from "./ImgCard.module.scss";

export default function ImgCard({src, icon, title, desc}) {
    return <>
        <div className={styles.container}>
            <div className={styles.img} style={{backgroundImage: `url("${src}")`}}>
                <span class="material-symbols-outlined">
                    {icon}
                </span>
            </div>
            <div className={styles.textarea}>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
        </div>
    </>
}
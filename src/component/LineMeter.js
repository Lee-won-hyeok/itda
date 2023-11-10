import React, { useEffect, useRef } from "react";
import styles from "./LineMeter.module.scss";

export default function LineMeter({min, max, setMin, setMax}) {
    useEffect(() => {
        meterRef && meterRef.current.style.setProperty(
            "width",
            max - min + "%"
        );
    }, [min, max]);
    const meterRef = useRef();
    return <div className={styles.wrapper}>
        <div className={styles.container}>
            <div className={styles.body}></div>
            <div className={styles.meter} ref={meterRef}></div>
            <div className={styles.inputs}>
                <input type="number" value={min} onChange={(e) => setMin(e.target.value)} />
                <input type="number" value={max} onChange={(e) => setMax(e.target.value)} />
            </div>
        </div>
    </div>
}
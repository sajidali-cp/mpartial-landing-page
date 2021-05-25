import React, { Children } from "react";
import styles from "./Steps.module.scss"
export default function Steps({stepNo,text}) {
  return (
    <div className={styles.col}>
      <div className={styles.data_point_item_row}>
        <div className={`${styles.data_number}`}>{stepNo}</div>
        <div className={`${styles.data_text}`}>
          {text}
        </div>
      </div>
    </div>
  );
}

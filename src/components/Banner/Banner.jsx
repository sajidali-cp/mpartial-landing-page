import React from "react";
import styles from "./Banner.module.scss";
export default function Banner({ heading }) {
  return <h2 className={styles.section_title_text}> {heading} </h2>;
}

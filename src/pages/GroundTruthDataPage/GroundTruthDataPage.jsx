import React from "react";
import styles from "./GroundTruthDataPage.module.scss"
import TitleLeft from "../../components/GroundTruthData/TitleLeft";

export default function GroundTruthDataPage() {
  return (
    <div>
      <div class={styles.container}>
        <div class={styles.mpartial_section}>
         <TitleLeft/>
         </div>
      </div>
    </div>
  );
}

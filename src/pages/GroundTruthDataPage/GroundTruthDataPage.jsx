import React from "react";
import styles from "./GroundTruthDataPage.module.scss"
import TitleLeft from "../../components/GroundTruthData/TitleLeft";
import CompareImage from "../../components/GroundTruthData/CompareImage";

export default function GroundTruthDataPage() {
  return (
    <div>
      <div class={styles.container}>
        <div class={styles.mpartial_section}>
         <TitleLeft/>
         <CompareImage/>
         </div>
      </div>
    </div>
  );
}

import React from "react";
import styles from "./FeeStructure.module.scss";
import Banner from "../../components/Banner/Banner";
import RangeSlider from "../../components/RangeSlider/RangeSlider";
export default function FeeStructure() {
  return (
    <div className={styles.feeStructure}>
      <div className={styles.container}>
        <Banner heading="Waterfall Fee Structure" />
        <RangeSlider />
        <p className={styles.section_title_description}>
          Drag the slider around based on what you think it will cost to repair
          the property. <br />
          Move forward based on the estimated fee structure below.
        </p>
      </div>
    </div>
  );
}

import React from "react";
import styles from "./FeeStructurePage.module.scss";
import Banner from "../../components/Banner/Banner";
import PlanCard from "../../components/FeeStructure/PlanCard";
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
        <div className={styles.card_row_wrapper}>
          <div className={styles.row}>
            <PlanCard
              heading="Trial Plan"
              authorities={["Access to mpartial engine"]}
              amount="Free"
            />
            <PlanCard
              heading="Enterprise Plan"
              authorities={[
                "Full access to mpartial engine",
                "Discounted fee schedule",
                "Unlimited collaborators",
                "Dedicated account manager",
                "Prioritized turnaround time",
              ]}
              amount="$495/month"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

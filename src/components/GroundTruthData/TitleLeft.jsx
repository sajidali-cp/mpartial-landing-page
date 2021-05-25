import React from 'react'
import styles from "./TitleLeft.module.scss"
export default function TitleLeft() {
    return (
        <div className={styles.title}>
        <div className={styles.row}>
          <div className={styles.col}>
            <h1 className={styles.section_title_text}>
              GROUND-TRUTH DATA EVERYONE TRUSTS
            </h1>
          </div>
          <div className={styles.col}>
            <p className={styles.section_title_description}>
              We have combined the best-of-breed technology platforms with
              an eye towards relieving you of administrative burden.
              Matterport 3D scans augmented by TruePlan are used to generate
              consistent Xactimate sheets that are delivered in accord with
              Actionable Insights compliance rule sets. Each mpartial is
              produced with full transparency, unprecedented forensic
              photography, and infallible geospatial data that collectively
              result in rapid approvals.
            </p>
          </div>
        </div>
      </div>
    
    )
}

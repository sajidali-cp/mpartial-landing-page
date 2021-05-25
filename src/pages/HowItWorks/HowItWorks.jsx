import React from "react";
import Banner from "../../components/HowItWorks/Banner/Banner";
import styles from "./HowItWorks.module.scss";
export default function HowItWorks() {
  return (
    <div>
      <div className={styles.howItWorks}>
        <div className={styles.container}>
          <Banner/>
          <div className={styles.data_points}>
            <div className={styles.row}></div>
          </div>
          <div className="try_now_btn">
            <a href="/login">
              <button className="btn">Get Started</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
